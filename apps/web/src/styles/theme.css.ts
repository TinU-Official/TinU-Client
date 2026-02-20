import { createTheme } from '@vanilla-extract/css';
import { fontStyle } from "./tokens/fontStyle";
import { color } from "./tokens/color";

const tokens = {
  color: color,
  fontStyles: fontStyle,
};

export const [themeClass, vars] = createTheme(tokens);
