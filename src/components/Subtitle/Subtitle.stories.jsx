// Button.stories.js|jsx

import { React, useState } from 'react';

import Subtitle from './Subtitle.jsx'

export default {
  title: 'Subtitle',
  component: Subtitle,
};

const Template = (args) => <Subtitle {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    subtitle: "Chuck Norris Joke Generator",
    size: "1.5rem"
};