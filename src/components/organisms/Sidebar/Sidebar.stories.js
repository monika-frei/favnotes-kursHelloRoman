import React from 'react';
import Sidebar from './Sidebar';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [StoryRouter()],
};

export const NotesSidebar = () => <Sidebar cardType="note"></Sidebar>;
export const TwitterSidebar = () => <Sidebar cardType="twitter"></Sidebar>;
export const ArticlesSidebar = () => <Sidebar cardType="article"></Sidebar>;
