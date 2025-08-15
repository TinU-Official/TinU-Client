import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const reportSelectWrapper = style({
  width: "100%",
  height: "100%",

  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "0 2rem",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
