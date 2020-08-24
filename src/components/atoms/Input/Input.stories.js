import React from 'react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const InputBig = () => <Input placeholder="big input"></Input>;
export const InputSmall = () => <Input placeholder="search input" search></Input>;
