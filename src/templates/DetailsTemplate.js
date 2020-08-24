import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 70px;
  width: 50vw;
`;

const StyledHeadingWrapper = styled.div`
  position: relative;
`;

const StyledHeader = styled(Heading)`
  margin: 0;
`;

const StyledDateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  margin-top: 0;
  text-transform: uppercase;
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 50px;
  z-index: 1;
`;

const StyledContent = styled(Paragraph)`
  padding: 25px 0 15px 0;
  margin-bottom: 0;
`;

const StyledLink = styled.a`
  display: block;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const DetailsTemplate = ({ pageType, title, created, content, twitterName, articleUrl }) => (
  <>
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <StyledHeadingWrapper>
          <StyledHeader big>{title}</StyledHeader>
          <StyledDateInfo>CREATED - {created}</StyledDateInfo>
          {pageType === 'twitters' && (
            <StyledAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`}></StyledAvatar>
          )}
        </StyledHeadingWrapper>
        <StyledContent>{content}</StyledContent>
        {pageType === 'twitters' && (
          <StyledLink href={`https://twitter.com/${twitterName}`} target="_blank">
            Open this twitter
          </StyledLink>
        )}
        {pageType === 'articles' && (
          <StyledLink href={articleUrl} target="_blank">
            Open this article
          </StyledLink>
        )}
        <Button pageType={pageType}>Close/Save</Button>
        <Paragraph>remove note</Paragraph>
      </StyledWrapper>
    </UserPageTemplate>
  </>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
  twitterName: null,
  articleUrl: null,
};

export default DetailsTemplate;
