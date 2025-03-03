import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const thirdBannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100dvh",
});

export const thirdBannerContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: "7.5rem",
});

export const thirdBannerTitleSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginBottom: "11rem",
});

export const thirdBannerTextWithLogoWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
});

export const thirdBannerText = style({
  ...vars.fontStyles.title2_sb_22,

  color: vars.color.grey_12,
});
