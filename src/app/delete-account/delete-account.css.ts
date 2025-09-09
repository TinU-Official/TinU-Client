import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const withdrawTextWrapper = style({
  width: "100%",
  height: "100%",

  padding: "3rem",
});

export const headerText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const title = style({
  ...vars.fontStyles.title2_sb_22,
});

export const description = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_6,

  marginTop: "0.5rem",
});

export const withdrawInfoWrapper = style({
  padding: "0 3rem",
});

export const withdrawInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  margin: "2rem 0",
});

export const withdrawInfoText = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_10,
});

export const verticalLine = style({
  marginLeft: "2rem",
  height: "7rem",
});

export const withdrawDescription = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const withdrawDescriptionText = style({
  ...vars.fontStyles.label1_m_12,
  color: vars.color.grey_6,
});

export const descriptionFlex = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const fixedButtonWrapper = style({
  display: "flex",
  gap: "1.2rem",

  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
