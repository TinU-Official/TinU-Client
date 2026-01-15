import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const title = style({
  ...vars.fontStyles.title2_sb_22,

  marginTop: "3.5rem",
  paddingLeft: "1rem",
});

export const description = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_6,

  marginTop: "0.5rem",
  paddingLeft: "1rem",
});

export const emailFormWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2rem",
});

export const emailFieldWrapper = style({
  marginTop: "4.6rem",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
