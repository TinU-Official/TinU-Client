import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

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
