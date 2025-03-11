import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const dailyChatGroupWrapper = style({
  width: "100%",
  marginTop: "2.5rem",

  textAlign: "center",
});

export const dateText = style({
  ...vars.fontStyles.label1_m_12,

  color: vars.color.grey_6,
});

export const chatListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.8rem",

  width: "100%",
  marginTop: "2.5rem",
});

export const chatBubbleWrapper = recipe({
  base: {
    display: "flex",

    width: "100%",
  },
  variants: {
    role: {
      sender: {
        justifyContent: "flex-end",
      },
      receiver: {
        justifyContent: "flex-start",
      },
    },
  },
});
