import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ImageInputFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const previewWrapper = style({
  width: "11rem",
  height: "11rem",
  borderRadius: "50%",
  boxShadow: `inset 0 0 0 1.28px ${vars.color.grey_5}`,

  position: "relative",
  cursor: "pointer",
});

export const previewImage = style({
  width: "100%",
  height: "100%",
  borderRadius: "50%",

  objectFit: "cover",
});

export const profileIcon = style({
  width: "100%",
  height: "100%",
});

export const addButton = style({
  position: "absolute",
  bottom: "0",
  right: "0",
});
