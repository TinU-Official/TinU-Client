import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const reportTextWrapper = style({
  width: "100%",
  height: "100%",

  padding: "3rem",
});

export const headerText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const titleWrapper = style({
  ...vars.fontStyles.title2_sb_22,
});

export const descriptionWrapper = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_6,

  marginTop: "0.5rem",
});
