import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { withKnobs, select } from '@storybook/addon-knobs';
import bulbIcon from 'assets/icons/idea.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import plusIcon from 'assets/icons/plus.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.primary};
`;

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const Bulb = () => <ButtonIcon active icon={bulbIcon}></ButtonIcon>;
export const Pen = () => <ButtonIcon icon={penIcon}></ButtonIcon>;
export const Twitter = () => <ButtonIcon icon={twitterIcon}></ButtonIcon>;
export const Logout = () => <ButtonIcon icon={logoutIcon}></ButtonIcon>;
export const Plus = () => <ButtonIcon icon={plusIcon}></ButtonIcon>;
