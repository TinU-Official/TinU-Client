import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { relative } from "path";

export const navBarWrapper = style({
  position: "sticky",
  bottom: "0",

  display: "flex",
  justifyContent: "space-between",

  width: "100%",
  height: "5.8rem",
  padding: "0 2.5rem",

  boxShadow: `inset 0 1px 0 0 #f1f5f5`,
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

export const activeBar = style({
  position: "absolute",
  top: "0.1rem",

  width: "100%",
  height: "0.4rem",

  borderRadius: "1.2rem",
  backgroundColor: "#14c3bc",
});

export const navItemLabel = style({
  ...vars.fontStyles.label1_m_12,

  color: vars.color.grey_11,
});
