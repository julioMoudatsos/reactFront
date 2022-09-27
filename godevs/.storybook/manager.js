import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  brandTitle: "GoDevs",
  base: 'light',
});

addons.setConfig({
  theme: theme,
});
