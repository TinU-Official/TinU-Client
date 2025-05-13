import { style } from "@vanilla-extract/css";

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
