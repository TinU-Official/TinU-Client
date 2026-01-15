import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const donePageWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",
});

export const titleWrapper = style({
  ...vars.fontStyles.title2_sb_22,

  marginTop: "5.2rem",
  paddingLeft: "1rem",
});

export const contentWrapper = style({
  flex: 1,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  paddingBottom: "10rem",
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

  transform: "scale(1.5)",
  transformOrigin: "center",
});

export const image = style({
  position: "relative",
  zIndex: 1,
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
