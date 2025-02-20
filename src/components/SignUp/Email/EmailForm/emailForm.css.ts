import { style } from "@vanilla-extract/css";

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
