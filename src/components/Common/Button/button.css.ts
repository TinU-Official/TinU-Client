import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const buttonStyle = style({
  ...vars.fontStyles.title3_sb_20,

  // width: "100%",
  height: "5.5rem",

  borderRadius: "1.2rem",

  background: vars.color.mint_500,
  color: vars.color.white,

  selectors: {
    "&:disabled": {
      background: vars.color.grey_3,
      color: vars.color.grey_6,
    },
  },
});

export const outlinedStyle = style({
  background: vars.color.white,
  border: `1px solid ${vars.color.grey_4}`,
  color: vars.color.grey_6,
});
