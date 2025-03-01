import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const secondBannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100dvh",
});

export const secondBannerContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: "7.5rem",
});

export const secondBannerTitleSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: "13rem",
});

export const secondBannerText = style({
  ...vars.fontStyles.title2_sb_22,

  color: vars.color.grey_12,
});
