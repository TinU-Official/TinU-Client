import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const loginPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12.6rem",

  width: "100%",
  height: "100dvh",
});

export const loginPageBanner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const loginPageTitle = style({
  ...vars.fontStyles.title3_sb_20,

  marginTop: "1.9rem",

  color: vars.color.grey_12,
  textAlign: "center",
});

export const mintText = style({
  color: vars.color.mint_500,
});
