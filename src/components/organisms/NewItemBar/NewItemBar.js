import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, ErrorMessage } from 'formik';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  height: 100vh;
  width: 680px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 50px;
  border-left: 10px solid ${({ theme, pageContext }) => theme[pageContext]};
  box-shadow: -5px 0 15px ${({ theme }) => theme.grey200};
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 20px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledTextarea = styled(Input)`
  height: 40vh;
  margin: 10px 0;
  border-radius: 20px;
  resize: none;
`;
const StyledInput = styled(Input)`
  margin: 15px 0;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 5px;
  color: red;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper pageContext={pageContext} isVisible={isVisible}>
    <StyledHeading big>
      {pageContext === 'notes' && 'Add a new note'}
      {pageContext === 'twitters' && 'Add a new twitter'}
      {pageContext === 'articles' && 'Add a new article'}
    </StyledHeading>
    <StyledParagraph>
      {pageContext === 'notes' && 'A note requires a title and description'}
      {pageContext === 'twitters' && 'A twitter requires account name and description'}
      {pageContext === 'articles' && 'An article requires title, description and a link'}
    </StyledParagraph>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '' }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
        values.title = '';
        values.content = '';
        values.articleUrl = '';
        values.twitterName = '';
      }}
      validate={(values) => {
        const errors = {};

        if (!values.title) {
          errors.title = 'Please fill in the title';
        }
        if (!values.content) {
          errors.content = 'Please fill in the description';
        }
        if (pageContext === 'articles') {
          if (!values.articleUrl) {
            errors.articleUrl = 'Please add a link of the article';
          }
        }
        if (pageContext === 'twitters') {
          if (!values.twitterName) {
            errors.twitterName = 'Please fill in the twitter name filed';
          }
        }

        return errors;
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form>
          <Input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          ></Input>
          <StyledErrorMessage name="title" component="div" />
          {pageContext === 'articles' && (
            <>
              <StyledInput
                type="text"
                name="articleUrl"
                placeholder="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
              <StyledErrorMessage name="articleUrl" component="div" />
            </>
          )}
          {pageContext === 'twitters' && (
            <>
              <StyledInput
                type="text"
                name="twitterName"
                placeholder="account name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
              <StyledErrorMessage name="twitterName" component="div" />
            </>
          )}
          <StyledTextarea
            as="textarea"
            name="content"
            placeholder="desription"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          ></StyledTextarea>
          <StyledErrorMessage name="content" component="div" />
          <Button type="submit">
            {pageContext === 'notes' && 'Add note'}
            {pageContext === 'twitters' && 'Add twitter'}
            {pageContext === 'articles' && 'Add article'}
          </Button>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withContext(NewItemBar));
