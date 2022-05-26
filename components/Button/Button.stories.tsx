import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: true },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

Primary.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
  await expect(canvas.getByText("Click me")).toBeInTheDocument();
};
