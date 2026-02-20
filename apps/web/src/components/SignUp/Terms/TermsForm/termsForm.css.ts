import { style } from "@vanilla-extract/css";

export const termsFormWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2rem",
});

export const termCheckboxListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  marginTop: "2.7rem",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
