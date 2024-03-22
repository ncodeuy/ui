import { Meta, StoryObj } from "@storybook/react";
import Text from "../components/Text";

const meta = {
  title: "Text",
  component: Text,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px", color: "#343434" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

//-----------------------------------------------------------------------------
//                                  STORIES
//-----------------------------------------------------------------------------
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.";

export const Small: Story = {
  args: {
    size: "sm",
    children: lorem,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: lorem,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: lorem,
  },
};
