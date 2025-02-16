import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const termCheckboxFieldWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const termCheckboxSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

export const termsType = recipe({
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

export const termText = style({
  ...vars.fontStyles.body2_m_14,

  color: vars.color.grey_6,
});

export const hiddenInput = style({
  display: "none",
});
