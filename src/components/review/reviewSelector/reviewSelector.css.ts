import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const questionText = style({
  ...vars.fontStyles.subtitle2_m_16,
  color: vars.color.grey_10,
});

export const reviewSelectorWrapper = style({
  display: "flex",
  flexDirection: "column",

  gap: "2.4rem",
  margin: "0 2rem",
});

export const reviewSelector = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "1.2rem",
});

export const buttonSection = style({
  width: "100%",

  display: "flex",
  gap: "2.3rem",
});
