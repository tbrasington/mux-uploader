import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeaderBar as Component } from "./HeaderBar";
import { Button } from "../Button";

export default {
  title: "UI/HeaderBar",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    {...args}
    links={
      <>
        <a href="http://tbrasington.com">All videos</a>
        <a href="http://tbrasington.com">Upload</a>
      </>
    }
    auth={<Button variant={"secondary"}>Sign out</Button>}
  ></Component>
);

export const HeaderBar = Template.bind({});

HeaderBar.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  await expect(canvas.getByText("All videos")).toBeInTheDocument();
  await expect(canvas.getByText("Upload")).toBeInTheDocument();
  await expect(canvas.getByText("Sign out")).toBeInTheDocument();
};
