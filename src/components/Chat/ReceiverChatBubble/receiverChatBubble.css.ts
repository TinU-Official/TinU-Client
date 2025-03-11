import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const receiverChatBubbleWrapper = style({
  padding: "0.9rem 1.2rem",
  width: "fit-content",
  maxWidth: "24rem",
  whiteSpace: "pre-wrap",
  borderRadius: "1.6rem",
  backgroundColor: vars.color.mint_500,
});

export const receiverChatBubbleText = style({
  ...vars.fontStyles.subtitle3_r_16,

  color: vars.color.white,
});

export const nickname = style({
  ...vars.fontStyles.subtitle1_sb_16,
});
