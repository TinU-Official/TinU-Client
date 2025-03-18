import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const chatListPageWrapper = style({
  flex: 1,

  display: "flex",
  flexDirection: "column",

  width: "100%",

  backgroundColor: vars.color.grey_2,
});

export const chatButtonList = style({
  position: "sticky",
  top: "6rem",

  display: "flex",
  alignItems: "center",
  gap: "0.6rem",

  padding: "0 2rem",
  width: "100%",
  height: "5.1rem",

  backgroundColor: vars.color.white,
});

export const chatListContainer = recipe({
  base: {
    flex: 1,
  },
  variants: {
    isEmpty: {
      true: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      false: {
        overflowY: "scroll",
      },
    },
  },
});

export const emptyNoticeSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",

  marginBottom: "7%",
});

export const emptyText = style({
  ...vars.fontStyles.body2_m_14,

  color: vars.color.grey_6,
  textAlign: "center",
});
