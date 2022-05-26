import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button as Component } from "./Button";

export default {
  title: "UI/Button",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: true },
    variant: { control: { type: "select", options: ["primary", "secondary"] } },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>Click me</Component>
);

export const Button = Template.bind({});
Button.args = {
  variant: "primary",
};

Button.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
  await expect(canvas.getByText("Click me")).toBeInTheDocument();
};
