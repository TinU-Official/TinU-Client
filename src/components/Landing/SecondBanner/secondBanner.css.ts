import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const secondBannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  height: "100dvh",
});

export const secondBannerTitleSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  margin: "14.4dvh 0 13rem 0",
});

export const secondBannerText = style({
  ...vars.fontStyles.title2_sb_22,

  color: vars.color.grey_12,
});
