import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const stepIconWrapper = style({
  position: "relative",
  marginTop: "0.8rem",
});

export const stepIconListContainer = style({
  display: "flex",
  gap: "0.6rem",
  paddingLeft: "1.05rem",
});

export const stepText = recipe({
  base: {
    ...vars.fontStyles.caption1_m_11,

    position: "absolute",
    top: "2.2rem",
    width: "fit-content",

    color: vars.color.grey_6,
  },
  variants: {
    step: {
        1: { left: 0 },
        2: { left: "2.4rem" },
        3: { left: "4.8rem" },
        4: { left: "7.2rem" } 
    }
  },
});
