import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Simple from "../components/Simple";

export default {
  title: "Example/Simple",
  component: Simple,
} as Meta;

const Template: Story = (args) => <Simple {...args} />;

export const SimpleComponent = Template.bind({});
