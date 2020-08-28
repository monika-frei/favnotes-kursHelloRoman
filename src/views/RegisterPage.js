import React from 'react';
import AuthTemplate from 'templates/AuthTemplate';
import AuthForm from 'components/organisms/AuthForm/AuthForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const RegisterPage = ({ status }) => {
  if (status === 201) {
    return <Redirect to={routes.home} />;
  }
  return (
    <AuthTemplate>
      <AuthForm authType="register" />
    </AuthTemplate>
  );
};

const mapStateToProps = ({ status = null }) => {
  return { status };
};

export default connect(mapStateToProps)(RegisterPage);
