import { vars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const optionButtonStyle = recipe({
  base: {
    width: "100%",
    height: "5rem",

    ...vars.fontStyles.body2_m_14,

    borderRadius: "0.85rem",
    background: vars.color.mint_500,
  },
  variants: {
    isSelected: {
      true: {
        color: vars.color.mint_500,

        backgroundColor: vars.color.mint_50,
        boxShadow: `inset 0 0 0 1px ${vars.color.mint_500}`,
      },
      false: {
        color: vars.color.grey_12,

        backgroundColor: vars.color.grey_2,
      },
    },
  },
});
