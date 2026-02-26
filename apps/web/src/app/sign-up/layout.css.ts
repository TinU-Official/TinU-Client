import { style } from "@vanilla-extract/css";

export const layoutWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100dvh",
});

export const mainContent = style({
  flex: 1,

  padding: "0 2rem",
});
