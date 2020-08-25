import styled, { css } from 'styled-components';
import withContext from 'hoc/withContext';

const Button = styled.button`
  background-color: ${({ theme, pageContext }) => (pageContext ? theme[pageContext] : theme.notes)};
  height: 47px;
  width: 220px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default withContext(Button);
