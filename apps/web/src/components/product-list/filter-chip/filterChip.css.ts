import { vars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const filterChipWrapper = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: "0.4rem",
    padding: "0.8rem 1rem",

    borderRadius: "999px",
    flexShrink: 0,

    ...vars.fontStyles.body5_m_13,
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.color.mint_500,
        color: vars.color.white,
      },
      false: {
        backgroundColor: vars.color.grey_3,
        color: vars.color.grey_8,
      },
    },
  },
});
