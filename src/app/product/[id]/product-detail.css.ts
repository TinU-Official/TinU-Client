import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const detailPageWrapper = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  paddingBottom: "10rem",
});

export const headerTitle = style({
  ...vars.fontStyles.subtitle1_sb_16,
});

export const productMainImg = style({
  width: "100%",
  height: "100%",

  aspectRatio: "1 / 1",
  overflow: "hidden",
  objectFit: "cover",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,

  padding: "1.25rem",
  backgroundColor: "white",
  boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
});
