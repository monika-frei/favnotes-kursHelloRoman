import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <div>
    <Sidebar></Sidebar>
    {children}
  </div>
);

UserPageTemplate.propTypes = {
  children: PropTypes.array.isRequired,
};

export default UserPageTemplate;
