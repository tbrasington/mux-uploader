import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LabelValuePair as Component } from "./LabelValuePair";

export default {
  title: "UI/Label Value Pair",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
);

export const LabelValuePair = Template.bind({});
LabelValuePair.args = {
  label: "Duration",
  value: "10:00",
  align: "left",
};

LabelValuePair.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  console.log({ args });
  await expect(canvas.getByText(args.label || "Duration")).toBeInTheDocument();
  await expect(canvas.getByText(args.value || "10:00")).toBeInTheDocument();
};
