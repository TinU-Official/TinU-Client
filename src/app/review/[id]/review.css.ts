import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const reviewWrapper = style({
  width: "100%",
  height: "100dvh",

  display: "flex",
  flexDirection: "column",
});

export const headerText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const emojiSection = style({
  display: "flex",
  height: "14rem",
  alignItems: "center",
  justifyContent: "center",

  marginBottom: "2.5rem",
  backgroundColor: vars.color.grey_3,
});

export const emojiWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.2rem",
});

export const questionText = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_7,
});

export const reviewSelectorWrapper = style({
  flex: 1,
  overflowY: "auto",

  paddingBottom: "9.5rem",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "2rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
