import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const chatPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
  width: "100%",
});

export const nickname = style({
  ...vars.fontStyles.subtitle1_sb_16,
});
