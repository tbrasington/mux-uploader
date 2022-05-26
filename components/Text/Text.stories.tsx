import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text as Component } from "./Text";

export default {
  title: "UI/Text",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: "select",
      options: [
        "heading",
        "label",
        "body",
        "labelDescription",
        "labelEmphasis",
        "deck",
      ],
    },
    color: {
      control: "select",
      options: ["inherit", "base", "muted", "highlight"],
    },
    align: {
      control: "select",
      options: ["left", "right"],
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
);

export const Text = Template.bind({});
Text.args = {
  children: "Some text",
  variant: "heading",
  color: "inherit",
  align: "left",
};

Text.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  await expect(
    canvas.getByText((args.children && args.children.toString()) || "Some text")
  ).toBeInTheDocument();
};
