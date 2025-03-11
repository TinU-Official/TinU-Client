import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const chatScreenWrapper = style({
  flex: 1,

  backgroundColor: vars.color.grey_2,
});

export const chatBubbleLine = recipe({
  base: {
    display: "flex",

    width: "100%",
  },
});
