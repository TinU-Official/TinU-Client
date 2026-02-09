import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const modalWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",

  width: "28.7rem",
  padding: "2.6rem 1.5rem",
  backgroundColor: vars.color.white,
  borderRadius: "1.2rem",
});

export const title = style({
  ...vars.fontStyles.subtitle2_m_16,
  color: vars.color.black,
});

export const buttonWrapper = style({
  width: "100%",
  display: "flex",
  gap: "1rem",
});

export const button = style({
  height: "4rem",
  ...vars.fontStyles.body4_sb_13,
});
