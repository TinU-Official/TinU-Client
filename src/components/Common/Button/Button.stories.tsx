import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  max-width: 43rem;
  padding: 0 2rem;
`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "활성화 상태",
    onClick: () => alert("활성화 버튼이 클릭되었습니다."),
  },
};

export const Disabled: Story = {
  args: {
    children: "비활성화 상태",
    disabled: true,
    onClick: () => alert("비활성화 버튼이 클릭되었습니다."),
  },
};
