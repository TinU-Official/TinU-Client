import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const reportSelectWrapper = style({
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",

  padding: "0 2rem",
});

export const otherReasonTextarea = style({
  width: "100%",
  height: "14rem",

  fontFamily: "var(--font-pretendard)",
  ...vars.fontStyles.subtitle3_r_16,
  backgroundColor: vars.color.grey_2,
  border: `1px solid ${vars.color.grey_4}`,
  borderRadius: "1rem",

  padding: "1.5rem",
  marginTop: "1rem",

  resize: "none",
  outline: "none",
});

export const fixedButtonWrapper = style({
  position: "fixed",
  bottom: "3.4rem",
  left: "0",
  right: "0",

  padding: "0 2rem",
});
