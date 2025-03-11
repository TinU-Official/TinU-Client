import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const chatScreenWrapper = style({
  flex: 1,

  padding: "0 1.6rem",

  overflowY: "scroll",

  backgroundColor: vars.color.grey_2,
});

export const chatBubbleLine = recipe({
  base: {
    display: "flex",

    width: "100%",
  },
});
