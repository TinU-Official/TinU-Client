import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const firstBannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100dvh",
});

export const firstBannerContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: "7.5rem",
});

export const firstBannerTitleSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: "9.6rem",
});

export const firstBannerTitle = style({
  ...vars.fontStyles.title2_sb_22,

  marginBottom: "2.3rem",

  color: vars.color.grey_12,
});
