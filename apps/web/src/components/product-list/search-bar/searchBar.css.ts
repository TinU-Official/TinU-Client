import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const searchBarWrapper = style({
  display: "flex",
  gap: "1rem",

  width: "100%",
  padding: "0.8rem 1.5rem",

  borderRadius: "1.2rem",

  backgroundColor: vars.color.grey_2,
});

export const searchBarInput = style({
  flex: 1,

  border: "none",
  outline: "none",

  backgroundColor: "transparent",

  ...vars.fontStyles.subtitle2_m_16,
});
