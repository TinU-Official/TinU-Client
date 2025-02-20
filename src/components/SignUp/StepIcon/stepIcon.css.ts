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
    step: Object.fromEntries([1, 2, 3, 4].map((step) => [step, { left: `${(step - 1) * 2.4}rem` }])) as Record<
      1 | 2 | 3 | 4,
      { left: string }
    >,
  },
});
