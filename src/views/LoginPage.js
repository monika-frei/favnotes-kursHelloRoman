import React from 'react';
import AuthTemplate from 'templates/AuthTemplate';
import AuthForm from 'components/organisms/AuthForm/AuthForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const LoginPage = ({ userID }) => {
  if (userID) {
    return <Redirect to={routes.home} />;
  }
  return (
    <AuthTemplate>
      <AuthForm authType="login" />
    </AuthTemplate>
  );
};

const mapStateToProps = ({ userID = null }) => {
  return { userID };
};

export default connect(mapStateToProps)(LoginPage);
