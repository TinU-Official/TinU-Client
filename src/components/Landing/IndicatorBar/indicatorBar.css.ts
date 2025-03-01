import { style } from "@vanilla-extract/css";

export const indicatorBarWrapper = style({
  position: "fixed",
  top: "50%",
  right: "1.5rem",
  transform: "translateY(-50%)",

  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

export const indicatorWrapper = style({
  width: "0.7rem",

  borderRadius: "0.9rem",
});

export const firstIndicatorWrapper = style({
  width: "0.7rem",

  borderRadius: "0.9rem",
});

export const secondIndicatorWrapper = style({
  width: "0.7rem",

  borderRadius: "0.9rem",
});

export const thirdIndicatorWrapper = style({
  width: "0.7rem",
  height: "3rem",

  borderRadius: "0.9rem",
});
