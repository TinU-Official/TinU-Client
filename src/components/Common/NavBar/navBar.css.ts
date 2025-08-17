import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const navBarWrapper = style({
  position: "sticky",
  bottom: "0",

  display: "flex",
  justifyContent: "space-between",

  width: "100%",
  height: "5.8rem",
  padding: "0 2.5rem",

  backgroundColor: vars.color.white,
});

export const navItemWrapper = style({
  position: "relative",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.4rem",

  width: "8rem",
  height: "100%",
});

export const navItemLabel = recipe({
  base: {
    ...vars.fontStyles.caption1_m_11,
  },
  variants: {
    isActive: {
      true: { color: vars.color.grey_11 },
      false: { color: vars.color.grey_5 },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});
