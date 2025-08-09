import { style } from "@vanilla-extract/css";

export const SignUpDoneFormWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  marginTop: "5rem",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});

export const celebrationWrapper = style({
  position: "relative",
});

export const confettiBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  transform: "scale(1.6)",
  transformOrigin: "center",
});

export const image = style({
  position: "relative",
  zIndex: 1,
});
