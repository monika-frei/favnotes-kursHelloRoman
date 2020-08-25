import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph.js';
import Heading from 'components/atoms/Heading/Heading.js';
import Button from 'components/atoms/Button/Button.js';
import linkIcon from 'assets/icons/chain.svg';
import { removeItem as removeItemAction } from 'actions/index';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 7px 12px ${({ theme }) => theme.grey200};
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1;
`;

const StyledLink = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white url(${linkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  top: 25px;
  right: 25px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      pageType,
      title,
      created,
      content,
      articleUrl,
      twitterName,
      removeItem,
    } = this.props;
    if (this.state.redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={pageType}>
          {pageType === 'twitters' && (
            <StyledAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`}></StyledAvatar>
          )}
          {pageType === 'articles' && <StyledLink href={articleUrl}></StyledLink>}
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary onClick={() => removeItem(pageType, id)}>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageType: 'notes',
  twitterName: null,
  articleUrl: null,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withContext(Card));
