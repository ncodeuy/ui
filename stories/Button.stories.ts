import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';


const meta = {
  title: 'Button',
  component: Button,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

//-----------------------------------------------------------------------------
//                                  STORIES
//-----------------------------------------------------------------------------
export const Primary: Story = {
  args: {
    color: "primary",
    children: 'Primary'
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'Warning'

  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    color: 'danger'
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    style: 'ghost'
  },
};

export const Icon: Story = {
  args: {
    icon: '✔',
    style: 'ghost'
  },
};

export const IconWithText: Story = {
  args: {
    children: 'Button',
    icon: '✔',
  },
};