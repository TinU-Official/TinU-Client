import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const productInfoWrapper = style({
  padding: "1rem 0 ",
  margin: "0 1.25rem",
});

export const productCategory = style({
  ...vars.fontStyles.body6_r_13,
  color: vars.color.grey_6,
});

export const productDetailInfo = style({
  display: "flex",
  flexDirection: "column",

  gap: "0.3rem",
});

export const productTitle = style({
  ...vars.fontStyles.title2_sb_22,
});

export const productMetaWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const productPrice = style({
  ...vars.fontStyles.title3_sb_20,
});

export const uploadTime = style({
  ...vars.fontStyles.body6_r_13,
  color: vars.color.grey_6,
});

export const productContentWrapper = style({
  ...vars.fontStyles.subtitle2_m_16,
  background: vars.color.grey_2,

  whiteSpace: "pre-wrap",

  marginTop: "2rem",
  padding: "1.25rem",
  borderRadius: "0.8rem",
});

export const hashTagWrapper = style({
  display: "flex",
  gap: "0.6rem",

  overflowX: "auto",
  whiteSpace: "nowrap",
  scrollbarWidth: "none",

  marginTop: "1.25rem",
});
