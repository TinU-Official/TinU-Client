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

export const descriptionWrapper = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_6,

  marginTop: "0.5rem",
  paddingLeft: "1rem",
});
