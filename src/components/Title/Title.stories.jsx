// Button.stories.js|jsx

import { React, useState } from 'react';

import Title from './Title.jsx'

export default {
  title: 'Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    title: "Joke Norris",
};