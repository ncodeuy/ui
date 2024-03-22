import { Meta, StoryObj } from "@storybook/react";
import List from "../components/List";

const meta = {
  title: "List",
  component: List,
} as Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof List>;

//----------------------------------------------------------------------------------------------------------------------
//                                                COMPONENT STORIES
//----------------------------------------------------------------------------------------------------------------------
export const Basic: Story = {
  render: () => (
    <List>
      <List.Header>List Component</List.Header>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
      <List.Item>Item 4</List.Item>
      <List.Item>Item 5</List.Item>
      <List.Item>Item 6</List.Item>
    </List>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <List>
      <List.Header>List Component</List.Header>
      <List.Item left="🍎">Item 1</List.Item>
      <List.Item left="🍊">Item 2</List.Item>
      <List.Item left="🍇">Item 3</List.Item>
      <List.Item left="🍓">Item 4</List.Item>
      <List.Item left="🍒">Item 5</List.Item>
      <List.Item left="🍑">Item 6</List.Item>
    </List>
  ),
};

export const WithRightIcons: Story = {
  render: () => (
    <List>
      <List.Header>List Component</List.Header>
      <List.Item right="🍎">Item 1</List.Item>
      <List.Item right="🍊">Item 2</List.Item>
      <List.Item right="🍇">Item 3</List.Item>
      <List.Item right="🍓">Item 4</List.Item>
      <List.Item right="🍒">Item 5</List.Item>
      <List.Item right="🍑">Item 6</List.Item>
    </List>
  ),
};
