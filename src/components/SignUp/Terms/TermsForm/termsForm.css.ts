import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const checkboxWrapper = style({
  padding: "1.5rem",

  backgroundColor: vars.color.grey_2,
  borderRadius: "1.2rem",
});

export const checkboxContent = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const checkboxText = style({
  ...vars.fontStyles.subtitle1_sb_16,

  color: vars.color.grey_8,
});

export const agreeContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const optionalAgreeContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.8rem",
  padding: "0 2rem",
});

export const optionalAgreeWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const agreeWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

export const agreeText = recipe({
  base: {
    ...vars.fontStyles.body2_m_14,
  },
  variants: {
    isRequired: {
      true: {
        color: vars.color.mint_500,
      },
      false: {
        color: vars.color.grey_6,
      },
    },
  },
});
