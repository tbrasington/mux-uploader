import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card as Component } from "./Card";

export default {
  title: "UI/Card",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}></Component>
);

export const Card = Template.bind({});
Card.args = {
  duration: "10:00",
  uploaded: "05/25/22 01:58 pm",
  image: "/gradient.png",
  unoptimized: true,
};

Card.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  console.log({ args });
  await expect(canvas.getByText(args.duration || "10:00")).toBeInTheDocument();
  await expect(
    canvas.getByText(args.uploaded || "05/25/22 01:58 pm")
  ).toBeInTheDocument();
};
