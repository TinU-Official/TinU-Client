import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const univPageWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",
});

export const title = style({
  ...vars.fontStyles.title2_sb_22,

  marginTop: "5.2rem",
  paddingLeft: "1rem",
});

export const description = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_6,

  marginTop: "0.5rem",
  paddingLeft: "1rem",
});

export const univInfoFormWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const univInfoFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  marginTop: "3.5rem",
});

export const swapButton = style({
  display: "flex",
  flexShrink: 0,
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
