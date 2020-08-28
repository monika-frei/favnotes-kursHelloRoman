import React from 'react';
import styled from 'styled-components';
import { NavLink, Redirect } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from '../../atoms/Logo/Logo';
import PropTypes from 'prop-types';
import bulbIcon from 'assets/icons/idea.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import withContext from 'hoc/withContext';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';

const SidebarWrapper = styled.div`
  background-color: ${({ theme, pageType }) => theme[pageType]};
  height: 100vh;
  width: 150px;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const MenuLinksWrapper = styled.div`
  margin-top: 5px;
`;

const StyledButtonLogout = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageContext, logout, userID }) => {
  if (!userID) {
    return <Redirect to={routes.login} />;
  }
  return (
    <SidebarWrapper pageType={pageContext}>
      <Logo to={routes.home} />
      <MenuLinksWrapper>
        <ButtonIcon as={NavLink} to={routes.notes} icon={penIcon} activeClass="active" />
        <ButtonIcon as={NavLink} to={routes.twitters} icon={twitterIcon} activeClass="active" />
        <ButtonIcon as={NavLink} to={routes.articles} icon={bulbIcon} activeClass="active" />
      </MenuLinksWrapper>
      <StyledButtonLogout
        as={NavLink}
        onClick={() => {
          logout(userID);
        }}
        to={routes.login}
        icon={logoutIcon}
      />
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

const mapStateToProps = ({ userID }) => {
  return {
    userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userID) => dispatch(logoutAction(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withContext(Sidebar));
