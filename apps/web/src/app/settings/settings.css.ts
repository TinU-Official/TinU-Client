import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headerText = style({
  ...vars.fontStyles.subtitle1_sb_16,
  color: vars.color.grey_12,
});

export const settingSection = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
});

export const infoRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const settingText = style({
  ...vars.fontStyles.body1_sb_14,
  color: vars.color.grey_6,
});

export const infoText = style({
  ...vars.fontStyles.subtitle2_m_16,
  color: vars.color.grey_11,
});

export const versionText = style({
  ...vars.fontStyles.body3_r_14,
  color: vars.color.grey_7,
});
