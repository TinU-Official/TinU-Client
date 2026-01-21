import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const divider = style({
  width: "100%",
  height: "var(--divider-height)",

  backgroundColor: vars.color.grey_2,
  border: "none",
  margin: "0",
});
