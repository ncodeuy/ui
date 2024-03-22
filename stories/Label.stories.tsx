import { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label";
import Input from "../components/Input";

const meta = {
  title: "Label",
  component: Label,
} satisfies Meta<typeof Label>;
export default meta;

type Story = StoryObj<typeof meta>;

//-----------------------------------------------------------------------------
//                                  STORIES
//-----------------------------------------------------------------------------
export const Default: Story = {
  args: {
    text: "Label",
    children: (
      <Input
        value=""
        placeholder="Enter your email address"
        onChange={() => {}}
      />
    ),
  },
};
