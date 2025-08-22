import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const mypageWrapper = style({
  flex: 1,
  width: "100%",
});

export const mypageText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const oneLineIntro = style({
  position: "relative",

  display: "flex",
  justifyContent: "center",
  marginTop: "1.5rem",
});

export const oneLineIntroText = style({
  ...vars.fontStyles.body5_m_13,
  color: vars.color.grey_10,

  position: "absolute",
  zIndex: 2,

  padding: "1rem",
});

export const profileSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  margin: "1.5rem 0",
});

export const myImgWrapper = style({
  aspectRatio: "1 / 1",
  position: "relative",

  width: "11rem",
  height: "11rem",
  padding: "0.4rem",

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
  margin: "2rem",
});

export const myInfoWrapper = style({
  display: "flex",
});

export const myInfoBox = style({
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

export const infoText1 = style([infoTextBase, { color: vars.color.grey_6 }]);

export const infoText2 = style({
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

export const myActivityWrapper = style({
  padding: "0 2rem",
});

export const myActivityText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const myActivitySection = style({
  display: "flex",
  justifyContent: "space-between",

  marginTop: "2.2rem",
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

export const activityButton = styleVariants({
  forSale: [buttonBase, { backgroundColor: "#DEF7FF" }],
  soldOut: [buttonBase, { backgroundColor: "#FFE9DE" }],
  hidden: [buttonBase, { backgroundColor: vars.color.grey_2 }],
});

export const activityText = style({
  ...vars.fontStyles.body1_sb_14,
  color: vars.color.grey_10,

  alignSelf: "flex-start",
});

export const iconWrapper = style({
  alignSelf: "flex-end",
});
