import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifier.svg';

const Input = styled.input`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.grey100};
  padding: 15px 30px;
  border: none;
  width: 374px;
  height: 47px;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      padding: 10px 20px 10px 40px;
      width: 234px;
      height: 35px;
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
