import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from '../../atoms/Logo/Logo';
import PropTypes from 'prop-types';
import bulbIcon from 'assets/icons/idea.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import withContext from 'hoc/withContext';

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

const Sidebar = ({ pageContext }) => (
  <SidebarWrapper pageType={pageContext}>
    <Logo to="/" />
    <MenuLinksWrapper>
      <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeClass="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClass="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClass="active" />
    </MenuLinksWrapper>
    <StyledButtonLogout as={NavLink} to="/login" icon={logoutIcon} />
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
