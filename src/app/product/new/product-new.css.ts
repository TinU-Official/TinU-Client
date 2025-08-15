import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headerTitle = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const mainWrapper = style({
  width: "100%",
  padding: "0 2rem",
});

export const won = style({
  ...vars.fontStyles.subtitle2_m_16,
  color: vars.color.grey_10,
});

export const textarea = style({
  width: "100%",
  height: "14rem",

  ...vars.fontStyles.subtitle3_r_16,
  backgroundColor: vars.color.grey_2,
  border: `1px solid ${vars.color.grey_4}`,
  borderRadius: "1rem",

  padding: "1.5rem",
  marginTop: "1rem",

  resize: "none",
  outline: "none",
});
