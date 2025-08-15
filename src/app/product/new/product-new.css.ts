import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headerTitle = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});
