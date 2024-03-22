import { Meta, StoryObj } from "@storybook/react";
import Heading from "../components/Heading";

const meta = {
  title: "Heading",
  component: Heading,
} satisfies Meta<typeof Heading>;
export default meta;

type Story = StoryObj<typeof meta>;

//-----------------------------------------------------------------------------
//                                  STORIES
//-----------------------------------------------------------------------------
export const ExtraSmall: Story = {
  args: {
    children: "Extra Small Heading",
    size: "xs"
  },
};

export const Small: Story = {
  args: {
    children: "Small Heading",
    size: "sm"
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Heading",
    size: "md"
  },
};

export const Large: Story = {
  args: {
    children: "Large Heading",
    size: "lg"
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large Heading",
    size: "xl"
  },
};