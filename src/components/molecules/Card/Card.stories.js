import React from 'react';
import Card from './Card.js';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const Primary = () => <Card></Card>;
export const Secondary = () => <Card cardType="twitter"></Card>;
export const Tertiary = () => <Card cardType="article"></Card>;
