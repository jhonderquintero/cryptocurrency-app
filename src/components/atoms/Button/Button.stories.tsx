import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/globals.css';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  variant: 'normal',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};
