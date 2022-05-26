import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Bubble as Component } from "./Bubble";
import { Button } from "../Button";

export default {
  title: "UI/Bubble",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <Button>Sign in</Button>
  </Component>
);

export const Bubble = Template.bind({});
Bubble.args = {
  label: "Upload a video file",
  value: "Search for a file on your computer. Any mp4 or mov is good. ",
};

// Card.play = async ({ args, canvasElement }) => {
//   // Starts querying the component from its root element
//   const canvas = within(canvasElement);
//   console.log({ args });
//   await expect(canvas.getByText(args.duration || "10:00")).toBeInTheDocument();
//   await expect(
//     canvas.getByText(args.uploaded || "05/25/22 01:58 pm")
//   ).toBeInTheDocument();
// };
