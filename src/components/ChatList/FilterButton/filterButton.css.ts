import { vars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const filterButtonWrapper = recipe({
  base: {
    width: "4.7rem",
    height: "3rem",
    borderRadius: "99.9rem",
  },
  variants: {
    isSelected: {
      true: {
        boxShadow: `inset 0 0 0 1px ${vars.color.mint_600}`,
        backgroundColor: vars.color.mint_50,
      },
      false: {
        backgroundColor: vars.color.grey_3,
      },
    },
  },
});

export const filterButtonOption = recipe({
  base: {
    ...vars.fontStyles.body5_m_13,
  },
  variants: {
    isSelected: {
      true: {
        color: vars.color.mint_600,
      },
      false: {
        color: vars.color.grey_8,
      },
    },
  },
});
