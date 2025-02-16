import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const checkboxWrapper = style({
  marginTop: "6.8rem",
  paddingLeft: "1.8rem",
  width: "100%",
  height: "6rem",

  display: "flex",
  alignItems: "center",
  gap: "0.9rem",

  backgroundColor: vars.color.grey_2,
  borderRadius: "1.2rem",
});

export const checkboxText = style({
  ...vars.fontStyles.subtitle1_sb_16,

  color: vars.color.grey_8,
});

export const hiddenInput = style({
  display: "none",
});
