import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const termsPageWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",
});

export const titleWrapper = style({
  ...vars.fontStyles.title2_sb_22,

  marginTop: "3.5rem",
  paddingLeft: "1rem",
});
