import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const badge = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "2rem",
    color: vars.color.white,
    borderRadius: "1.3rem 1.3rem 1.3rem 0.1rem",
  },

  variants: {
    status: {
      forSale: {
        width: "4rem",
        backgroundColor: vars.color.mint_500,
      },
      soldOut: {
        width: "5rem",
        backgroundColor: vars.color.grey_8,
      },
    },
  },
});
