import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ProductInfoWrapper = style({
  position: "sticky",
  top: "6rem",

  display: "flex",
  alignItems: "center",
  gap: "1.7rem",

  width: "100%",
  height: "7rem",
  paddingLeft: "2rem",

  backgroundColor: vars.color.white,
});

export const ProductDetailContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const ProductTitleAndStatus = style({
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
});

export const ProductTitle = style({
  ...vars.fontStyles.subtitle2_m_16,
});

export const ProductPrice = style({
  ...vars.fontStyles.body2_m_14,

  color: vars.color.grey_6,
});
