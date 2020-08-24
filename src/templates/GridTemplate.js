import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
  padding: 25px 70px 25px 70px;
`;

const StyledPageHeader = styled.div`
  padding: 25px 70px 25px 70px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`;
const StyledHeding = styled(Heading)`
  margin-bottom: 0;
  text-transform: capitalize;
`;
const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledPageHeader>
      <Input search placeholder="search" />
      <StyledHeding big as="h1">
        {pageType}
      </StyledHeding>
      <StyledParagraph>6 {pageType}</StyledParagraph>
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.array.isRequired,
};

export default GridTemplate;
