import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { Link } from 'react-router-dom';
import { removeItem as removeItemAction } from 'actions';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  padding: 70px 70px 70px 180px;
  width: 50vw;
`;

const StyledHeadingWrapper = styled.div`
  position: relative;
`;

const StyledHeader = styled(Heading)`
  margin: 0;
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 10px;
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
  color: black;
`;

const StyledParagraph = styled(Paragraph)`
  display: block;
  margin-top: 20px;
  color: black;
`;

const DetailsTemplate = ({
  pageContext,
  title,
  content,
  twitterName,
  articleUrl,
  removeItem,
  id,
}) => {
  return (
    <>
      <UserPageTemplate>
        <StyledWrapper>
          <StyledHeadingWrapper>
            <StyledHeader big>{title}</StyledHeader>
            {pageContext === 'twitters' && (
              <StyledAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`}></StyledAvatar>
            )}
          </StyledHeadingWrapper>
          <StyledContent>{content}</StyledContent>
          {pageContext === 'twitters' && (
            <StyledLink href={`https://twitter.com/${twitterName}`} target="_blank">
              Open this twitter
            </StyledLink>
          )}
          {pageContext === 'articles' && (
            <StyledLink href={articleUrl} target="_blank">
              Open this article
            </StyledLink>
          )}
          <Button as={Link} to={`/${pageContext}`}>
            Close
          </Button>
          <StyledParagraph
            as={Link}
            to={`/${pageContext}`}
            onClick={() => removeItem(pageContext, id)}
          >
            remove note
          </StyledParagraph>
        </StyledWrapper>
      </UserPageTemplate>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
  };
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
  twitterName: null,
  articleUrl: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(withContext(DetailsTemplate));
