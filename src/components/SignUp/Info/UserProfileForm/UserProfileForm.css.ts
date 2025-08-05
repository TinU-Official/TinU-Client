import { style } from "@vanilla-extract/css";

export const userProfileFormWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  marginTop: "5rem",
});

export const nicknameFieldWrapper = style({
  marginTop: "3.5rem",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
