import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const Empty:  Story = {
  args: {
    value: '',
    placeholder: 'Type something...',
    onChange: (value: string) => console.log(value),
  },
} satisfies Story;

export const Filled: Story = {
  args: {
    value: 'John Doe',
    onChange: (value: string) => console.log(value),
  },
} satisfies Story;

export const Disabled: Story = {
  args: {
    value: 'John Doe',
    onChange: (value: string) => console.log(value),
    disabled: true,
  },
} satisfies Story;

export const RightIcon: Story = { 
  args: {
    value: '',
    placeholder: 'Who are you looking for?',
    onChange: (value: string) => console.log(value),
    disabled: false,
    right: '👤',
  },
} satisfies Story;

export const LeftIcon: Story = {
  args: {
    value: '',
    placeholder: 'Search for movies...',
    onChange: (value: string) => console.log(value),
    disabled: false,
    left: '🔍',
  },
} satisfies Story;
