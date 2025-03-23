import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const chatListItemWrapper = style({
  display: "flex",
  alignItems: "center",

  width: "100%",
  height: "7.5rem",
  padding: "0 2rem",

  backgroundColor: vars.color.white,
});

export const productImage = style({
  borderRadius: "0.8rem",
});

export const chatContentContainer = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  minWidth: 0,
  marginLeft: "1.7rem",
  marginRight: "3.4rem",
});

export const nickName = style({
  ...vars.fontStyles.body2_m_14,

  color: vars.color.grey_12,
});

export const previewMessage = recipe({
  base: {
    ...vars.fontStyles.body2_m_14,

    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    wordBreak: "break-all",
  },
  variants: {
    isNotRead: {
      true: {
        color: vars.color.grey_12,
      },
      false: {
        color: vars.color.grey_7,
      },
    },
  },
});

export const chatMetaContainer = recipe({
  variants: {
    isNotRead: {
      true: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "1rem",
      },
      false: {
        padding: "1.8rem 0",
        height: "100%",
      },
    },
  },
});

export const receiveTime = style({
  ...vars.fontStyles.caption1_m_11,

  color: vars.color.grey_6,
});

export const notReadCountBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "1.6rem",
  height: "1.6rem",

  borderRadius: "0.75rem",
  backgroundColor: vars.color.red_2,
});

export const notReadCount = style({
  ...vars.fontStyles.caption1_m_11,

  color: vars.color.white,
});
