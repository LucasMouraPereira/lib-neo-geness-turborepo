import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "NeoGeness/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['neoGeness'],
      },
    },
  },
  args: { onClick: fn() },
};

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: 'neoGeness',
    children: 'Button Client 1',
  },
};

export const Secondary: Story = {
  args: {
    as: 'neoGeness',
    children: 'Button Client 1',
  },
};

export const Large: Story = {
  args: {
    as: 'neoGeness',
    children: 'Button Client 1',
  },
};

export const Small: Story = {
  args: {
    as: 'neoGeness',
    children: 'Button Client 1',
  },
};
