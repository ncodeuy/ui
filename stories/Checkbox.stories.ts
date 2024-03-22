import { StoryObj } from "@storybook/react";
import Checkbox from "../components/Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

//-----------------------------------------------------------------------------
//                                  STORIES
//-----------------------------------------------------------------------------
export const Unchecked: Story = {
  args: {
    label: "Unchecked",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    checked: true,
    disabled: true,
  },
};