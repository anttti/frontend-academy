import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Name, NameProps } from "../components/Name";

export default {
  title: "Example/Name",
  component: Name,
} as Meta;

const Template: Story<NameProps> = (args) => <Name {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Mickey",
};
