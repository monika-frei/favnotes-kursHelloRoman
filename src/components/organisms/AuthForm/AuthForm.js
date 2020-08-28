import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import { Link } from 'react-router-dom';
import { authenticate as authenticateAction } from 'actions';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 40vw;
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 3px 15px ${(theme) => theme.grey200};
`;

const StyledForm = styled(Form)`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled(Input)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const AuthForm = ({ authType, authenticate }) => (
  <StyledWrapper>
    <Heading>
      {authType === 'login' && 'Sign In'}
      {authType === 'register' && 'Create account'}
    </Heading>
    <Formik
      initialValues={{ username: '', password: '', password2: '' }}
      onSubmit={(values) => authenticate(values.username, values.password, authType)}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        if (authType === 'register' && !values.password2) {
          errors.password2 = 'Required';
        }
        return errors;
      }}
    >
      {({ handleChange, handleBlur, values }) => {
        return (
          <StyledForm>
            <StyledInput
              type="username"
              name="username"
              placeholder="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            ></StyledInput>
            <ErrorMessage name="username" component="div" />
            <StyledInput
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></StyledInput>
            <ErrorMessage name="password" component="div" />
            {authType === 'register' && (
              <>
                <StyledInput
                  type="text"
                  name="password2"
                  placeholder="confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password2}
                ></StyledInput>
                <ErrorMessage name="password2" component="div" />
              </>
            )}
            <StyledButton type="submit">
              {authType === 'login' && 'enter favnote'}
              {authType === 'register' && 'register'}
            </StyledButton>
          </StyledForm>
        );
      }}
    </Formik>
    {authType === 'login' && <StyledLink to="/register">i want my account!</StyledLink>}
    {authType === 'register' && <StyledLink to="/login">i want to log in</StyledLink>}
  </StyledWrapper>
);

AuthForm.propTypes = {
  authType: PropTypes.oneOf(['login', 'register']),
};

AuthForm.defaultProps = {
  authType: 'login',
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (username, password, authType) =>
      dispatch(authenticateAction(username, password, authType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
