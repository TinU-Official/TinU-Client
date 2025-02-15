import { typography } from "./typography";

export const fontStyle = {
  // title
  title1_sb_24: {
    fontSize: typography.fontSize.title1,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },
  title2_sb_22: {
    fontSize: typography.fontSize.title2,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },
  title3_sb_20: {
    fontSize: typography.fontSize.title3,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },

  // subtitle
  subtitle1_sb_16: {
    fontSize: typography.fontSize.subtitle,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },
  subtitle2_m_16: {
    fontSize: typography.fontSize.subtitle,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
  subtitle3_r_16: {
    fontSize: typography.fontSize.subtitle,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },

  // body
  body1_sb_14: {
    fontSize: typography.fontSize.body1,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },
  body2_m_14: {
    fontSize: typography.fontSize.body1,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
  body3_r_14: {
    fontSize: typography.fontSize.body1,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },
  body4_sb_13: {
    fontSize: typography.fontSize.body2,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },


  // label
  label1_m_12: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },

  // caption
  caption1_m_11: {
    fontSize: typography.fontSize.caption,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
} as const;
