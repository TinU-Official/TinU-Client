import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const receiverChatBubbleContainer = style({
  display: "flex",
  gap: "0.6rem",
});

export const receiverChatBubbleWrapper = style({
  padding: "0.9rem 1.2rem",
  width: "fit-content",
  maxWidth: "24rem",

  borderRadius: "1.6rem",
  backgroundColor: vars.color.white,

  whiteSpace: "pre-wrap",
});

export const receiverChatBubbleText = style({
  ...vars.fontStyles.subtitle3_r_16,

  color: vars.color.black,
});

export const receiverProfileImage = style({
  borderRadius: "1.5rem",
});

export const flexEndAlignBox = style({
  display: "flex",
  alignItems: "flex-end",
  gap: "0.3rem",
});

export const timeText = style({
  ...vars.fontStyles.caption1_m_11,

  color: vars.color.grey_5,
});
