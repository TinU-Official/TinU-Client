import type { Preview } from "@storybook/react";
import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "../src/styles/theme";
import gStyle from "../src/styles/GlobalStyles";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={gStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
