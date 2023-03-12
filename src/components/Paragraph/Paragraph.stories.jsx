import { React, useState } from 'react';

import Paragraph from './Paragraph.jsx'

export default {
  title: 'Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    content: "Minchia mbare che bello sto paragrafo",
    align: "center"
};