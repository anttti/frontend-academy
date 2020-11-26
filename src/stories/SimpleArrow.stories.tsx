import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import SimpleArrow from "../components/SimpleArrow";

export default {
  title: "Example/SimpleArrow",
  component: SimpleArrow,
} as Meta;

const Template: Story = (args) => <SimpleArrow {...args} />;

export const SimpleArrowComponent = Template.bind({});
