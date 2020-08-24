import React from 'react';
import Heading from './Heading';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const HeadingPrimary = () => {
  const label = 'FontSize';
  const options = {
    l: '2.4rem',
    xl: '4rem',
  };
  const defaultValue = '2.4rem';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Heading fontSize={value}>Primary</Heading>;
};
