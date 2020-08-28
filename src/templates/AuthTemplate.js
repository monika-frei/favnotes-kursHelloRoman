import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import logo from 'assets/icons/logo.svg';
// import notesIcon from 'assets/icons/pen.svg';
// import twitterIcon from 'assets/icons/twitter.svg';
// import articleIcon from 'assets/icons/idea.svg';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled(ButtonIcon)`
  margin: 20px 0 20px 0;
  width: 290px;
  height: 80px;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  width: 450px;
  text-align: center;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo icon={logo}></StyledLogo>
    <StyledHeading>Your new favorite online notes experience</StyledHeading>

    {children}
  </StyledWrapper>
);

export default AuthTemplate;

//dodatkowy pasek z ikonami
// const StyledIconsWrapper = styled.div`
//   margin: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

/* <StyledIconsWrapper>
      <ButtonIcon icon={notesIcon}></ButtonIcon>
      <ButtonIcon icon={twitterIcon}></ButtonIcon>
      <ButtonIcon icon={articleIcon}></ButtonIcon>
    </StyledIconsWrapper> */
