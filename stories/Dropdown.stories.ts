import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../components/Dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dropdown>; 
export default meta;

type Story = StoryObj<typeof meta>;

//-----------------------------------------------------------------------------
//                                  STORIES
//-----------------------------------------------------------------------------
export const Empty: Story = {
  args: {
    value: null,
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
    ],
  },
};

export const WithValue: Story = {
  args: {
    value: "2",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    value: "2",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
    ],
    disabled: true,
  },
};