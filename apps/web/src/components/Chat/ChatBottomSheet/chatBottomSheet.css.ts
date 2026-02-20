import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const chatBottomSheetWrapper = style({
  position: "sticky",
  bottom: 0,

  width: "100%",
  height: "6.8rem",
  padding: "0 1.3rem",

  borderRadius: "1.6rem 1.6rem 0 0",
});

export const chatBottomSheetClosedSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  width: "100%",
  marginTop: "1.6rem",
});

export const openBottomSheetButton = style({
  width: "3.2rem",
  height: "3.2rem",

  borderRadius: "50%",
  backgroundColor: vars.color.grey_2,
});

export const chattingInputBox = style({
  flex: 1,

  display: "flex",
  alignItems: "center",
  gap: "1.4rem",

  height: "3.2rem",
  padding: "0 1.4rem",

  borderRadius: "1.2rem",
  backgroundColor: vars.color.grey_2,
});

export const chattingInput = style({
  flex: 1,

  ...vars.fontStyles.body3_r_14,

  border: "none",
  backgroundColor: "transparent",
});

export const buttonListWrapper = style({
  padding: "0 4.2rem",
  marginTop: "2.3rem",
});

export const selectImageButton = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",
});

export const cameraIconWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "5.6rem",
  height: "5.6rem",
  borderRadius: "1.2rem",

  backgroundColor: vars.color.grey_3,
});

export const selectImageButtonText = style({
  ...vars.fontStyles.body4_sb_13,

  color: vars.color.grey_9,
});

export const hiddenInput = style({
  display: "none",
});
