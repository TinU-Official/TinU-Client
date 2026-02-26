import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const productMetaWrapper = style({
  width: "100%",
  height: "6.5rem",

  display: "flex",
  justifyContent: "space-between",

  padding: "0 0.625rem 0 1.5rem",
  borderBottom: `1px solid ${vars.color.grey_2}`,
});

export const sellerImg = style({
  borderRadius: "50%",
});

export const sellerName = style({
  ...vars.fontStyles.subtitle1_sb_16,
});

export const sellerProfileSection = style({
  display: "flex",
  alignItems: "center",

  gap: "1rem",
});

export const toggleSection = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const likesCount = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_5,
});
