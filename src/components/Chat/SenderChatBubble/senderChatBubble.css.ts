import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const senderChatBubbleContainer = style({
  display: "flex",
  alignItems: "flex-end",
  gap: "0.3rem",
});

export const senderChatBubbleWrapper = style({
  padding: "0.9rem 1.2rem",
  width: "fit-content",
  maxWidth: "24rem",

  borderRadius: "1.6rem",
  backgroundColor: vars.color.mint_500,

  whiteSpace: "pre-wrap",
});

export const senderChatBubbleText = style({
  ...vars.fontStyles.subtitle3_r_16,

  color: vars.color.white,
});

export const timeText = style({
  ...vars.fontStyles.caption1_m_11,

  color: vars.color.grey_5,
});
