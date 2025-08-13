import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const productItemWrapper = style({
  width: "100%",
});

export const productImageWrapper = style({
  width: "100%",
  aspectRatio: "1 / 1",
  position: "relative",
});

export const productImage = style({
  objectFit: "cover",
});

export const productMeta = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "100%",
  height: "7rem",
  padding: "1.1rem 1rem 1.6rem 1rem",
});

export const productMetaRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const productPrice = style({
  ...vars.fontStyles.body1_sb_14,

  color: vars.color.grey_11,
});

export const productHeartContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.1rem",
});

export const productHeartCount = style({
  ...vars.fontStyles.caption1_m_11,

  color: vars.color.red_2,
});

export const productTitle = style({
  ...vars.fontStyles.body3_r_14,

  color: vars.color.grey_8,
});

export const postedTime = style({
  ...vars.fontStyles.label1_m_12,

  color: vars.color.grey_5,
});
