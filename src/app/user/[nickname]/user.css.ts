import { vars } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const userPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
  width: "100%",
});

export const profile = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const oneLineIntroSection = style({
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1.5rem",
});

export const oneLineIntroText = style({
  ...vars.fontStyles.body5_m_13,
  color: vars.color.grey_10,

  backgroundColor: vars.color.grey_2,
  width: "80%",

  padding: "1rem 2rem",
  resize: "none",
  border: "none",
  outline: "none",
  borderRadius: "2rem",

  overflow: "hidden",
});

export const profileSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginTop: "1.5rem",
});

export const bubble = style({
  position: "absolute",
  top: "4rem",
  left: "27%",
});

export const myImgWrapper = style({
  aspectRatio: "1 / 1",
  position: "relative",

  width: "11rem",
  height: "11rem",

  border: `3px solid ${vars.color.mint_500}`,
  borderRadius: "50%",
});

export const profileImg = style({
  objectFit: "cover",
  borderRadius: "50%",

  padding: "0.4rem",
});

export const pencil = style({
  position: "absolute",
  bottom: "0",
  right: "0",
});

export const nickname = style({
  ...vars.fontStyles.subtitle1_sb_16,
  marginTop: "1rem",
});

export const myInfoContainer = style({
  backgroundColor: vars.color.grey_2,

  borderRadius: "1rem",
  margin: "1.6rem 1.6rem 0 1.6rem",
});

export const myInfoWrapper = style({
  display: "flex",
});

export const myInfoItem = style({
  width: "100%",
  height: "8rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "1rem",
});

export const infoTextBase = style({
  ...vars.fontStyles.body5_m_13,
});

export const infoLabel = style({
  ...vars.fontStyles.body5_m_13,
  color: vars.color.grey_6,
});

export const infoValue = style({
  ...vars.fontStyles.body1_sb_14,
  color: vars.color.grey_12,
});

export const verticalLine = style({
  flexShrink: "0",
  alignSelf: "center",
});

export const divider = style({
  height: "0.8rem",

  backgroundColor: vars.color.grey_2,
  margin: "2.3rem 0",
});

export const activityWrapper = style({
  padding: "0 2rem",
});

export const activityText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const activitySection = style({
  display: "flex",
  gap: "1.7rem",
  margin: "2.2rem 0",
  flexWrap: "wrap",
});

export const buttonBase = style({
  width: "10rem",
  height: "10rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",

  padding: "1rem 1rem 0.5rem 1rem",
  borderRadius: "1rem",
});

export const statusButton = styleVariants({
  forSale: [buttonBase, { backgroundColor: "#DEF7FF" }],
  soldOut: [buttonBase, { backgroundColor: "#FFE9DE" }],
});

export const statusLabel = style({
  ...vars.fontStyles.body1_sb_14,
  color: vars.color.grey_10,

  alignSelf: "flex-start",
});

export const iconAlignEnd = style({
  alignSelf: "flex-end",
});
