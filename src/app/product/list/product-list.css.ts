import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const stickyWrapper = style({
  position: "sticky",
  top: "6rem",
  zIndex: 100,

  width: "100%",
});

export const searchBarSection = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  padding: "1.3rem 2rem",

  backgroundColor: vars.color.white,
});

export const filterChipSection = style({
  width: "100%",
  padding: "1.5rem 2rem",

  backgroundColor: vars.color.white,
});

export const filterChipScrollContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",

  width: "100%",
  overflowX: "auto",

  scrollbarWidth: "none",
  msOverflowStyle: "none",
});

export const productListSection = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: "0.5rem",

  width: "100%",
});
