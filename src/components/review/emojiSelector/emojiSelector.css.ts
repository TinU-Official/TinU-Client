import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const emojiSection = style({
  display: "flex",
  gap: "3.7rem",
});

export const emojiWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "0.8rem",
});

export const emojiCircle = recipe({
  base: {
    width: "6rem",
    height: "6rem",

    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    selected: {
      true: { backgroundColor: vars.color.mint_500 },
      false: { backgroundColor: "white" },
    },
  },
});

export const emojiText = style({
  ...vars.fontStyles.body2_m_14,
  color: vars.color.grey_10,
});
