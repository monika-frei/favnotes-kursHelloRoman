import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import closeIcon from 'assets/icons/close.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding-right: 80px;
`;

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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  z-index: 3;
  bottom: 30px;
  right: 30px;
  background-color: ${({ theme, pageContext }) => theme[pageContext]};
  border-radius: 50%;
  cursor: pointer;
`;

class GridTemplate extends Component {
  state = {
    activeNewItemBar: false,
  };

  handleNewItemBarToggle = () => {
    this.setState((prevState) => {
      return { activeNewItemBar: !prevState.activeNewItemBar };
    });
  };

  render() {
    const { children, pageContext } = this.props;
    const { activeNewItemBar } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" />
            <StyledHeding big as="h1">
              {pageContext}
            </StyledHeding>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGridWrapper>{children}</StyledGridWrapper>
          <StyledButtonIcon
            icon={this.state.activeNewItemBar ? closeIcon : plusIcon}
            pageContext={pageContext}
            onClick={this.handleNewItemBarToggle}
          ></StyledButtonIcon>
          <NewItemBar handleClose={this.handleNewItemBarToggle} isVisible={activeNewItemBar} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
