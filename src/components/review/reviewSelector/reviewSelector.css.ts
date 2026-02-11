import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const questionText = style({
  ...vars.fontStyles.subtitle2_m_16,
  color: vars.color.grey_10,
});

export const reviewSelectorWrapper = style({
  display: "flex",
  flexDirection: "column",

  gap: "2.4rem",
});

export const reviewSelector = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "1.2rem",
});

export const buttonSection = style({
  display: "flex",
  gap: "2.3rem",
});

export const optionButton = recipe({
  base: {
    width: "15.5rem",
    height: "5.8rem",
    ...vars.fontStyles.subtitle2_m_16,
  },

  variants: {
    state: {
      default: {
        color: vars.color.grey_12,
        backgroundColor: vars.color.grey_2,
        border: "1px solid transparent",
      },

      selected: {
        color: vars.color.mint_500,
        backgroundColor: "#E8F9F8",
        border: "1px solid",
        borderColor: vars.color.mint_500,
      },
    },
  },

  defaultVariants: {
    state: "default",
  },
});
