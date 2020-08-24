import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/icons/logo.svg';

const Logo = styled(NavLink)`
  display: block;
  width: 80px;
  height: 80px;
  margin-bottom: 50px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`;

export default Logo;
