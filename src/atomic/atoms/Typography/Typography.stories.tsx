import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const HeadingLarge = Template.bind({});
HeadingLarge.args = {};
export const Heading = Template.bind({});
export const HeadingSmall = Template.bind({});
export const TextLarge = Template.bind({});
export const Text = Template.bind({});
export const TextSmall = Template.bind({});
export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
