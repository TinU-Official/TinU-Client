import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const firstBannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  height: "100dvh",
});

export const firstBannerTitleSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  margin: "14.4dvh 0 9.6rem 0",
});

export const firstBannerTitle = style({
  ...vars.fontStyles.title2_sb_22,

  marginBottom: "2.3rem",

  color: vars.color.grey_12,
});
