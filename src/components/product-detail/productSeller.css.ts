import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const productSellerWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const productSellerSection = style({
  width: "100%",
  height: "65px",

  display: "flex",
  justifyContent: "space-between",

  padding: "0 0.625rem 0 1.5rem",
  borderBottom: `1px solid ${vars.color.grey_2}`,
});

export const sellerImg = style({
  width: "2.5rem",
  height: "2.5rem",

  borderRadius: "50%",
});

export const sellerName = style({
  ...vars.fontStyles.subtitle1_sb_16,
});

export const sellerSection = style({
  display: "flex",
  alignItems: "center",

  gap: "1rem",
});

export const toggleSection = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});
