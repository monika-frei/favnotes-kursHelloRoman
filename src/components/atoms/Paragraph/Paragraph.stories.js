import React from 'react';
import Paragraph from './Paragraph';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  decorators: [withKnobs],
};

export const PrimaryParagraph = () => {
  const label = 'FontSize';
  const options = {
    xxs: '1rem',
    xs: '1.2rem',
    s: '1.6rem',
    m: '2.1rem',
    l: '2.4rem',
    xl: '4rem',
  };
  const defaultValue = '1.6rem';
  const groupId = 'GROUP-ID2';

  const value = select(label, options, defaultValue, groupId);

  return <Paragraph fontSize={value}>bla bla bla bla</Paragraph>;
};
