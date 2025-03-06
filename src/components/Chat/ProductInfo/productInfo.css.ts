import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ProductInfoWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.7rem",

  width: "100%",
  height: "7rem",
  paddingLeft: "2rem",
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

export const ProductStatus = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "4rem",
  height: "2rem",

  color: vars.color.white,

  borderRadius: "1.3rem 1.3rem 1.3rem 0.1rem",
  backgroundColor: vars.color.mint_500,
});

export const ProductPrice = style({
  ...vars.fontStyles.subtitle2_m_16,

  color: vars.color.grey_6,
});
