import { vars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const tag = recipe({
  base: {
    width: "fit-content",
    borderRadius: "1.8rem",
    padding: "0.8rem 1rem",
    border: "1px solid",
    ...vars.fontStyles.body5_m_13,
  },
  variants: {
    state: {
      inactive: {
        borderColor: vars.color.grey_4,
        color: vars.color.grey_8,
        backgroundColor: "white",
      },
      active: {
        borderColor: vars.color.mint_600,
        color: vars.color.mint_600,
        backgroundColor: vars.color.mint_50,
      },
    },
  },
  defaultVariants: {
    state: "inactive",
  },
});
