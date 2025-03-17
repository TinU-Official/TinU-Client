import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const chatListPageWrapper = style({
  flex: 1,

  width: "100%",
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
