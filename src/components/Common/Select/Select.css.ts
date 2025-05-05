import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const dropdownWrapper = style({
  position: "relative",
  width: "100%",
});

export const dropdownList = style({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  marginTop: "0.625rem",
  borderRadius: "1.2rem",
  border: `1px solid ${vars.color.grey_4}`,
  backgroundColor: vars.color.white,
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  overflow: "auto",
  maxHeight: "20rem",
  zIndex: 100,
});

export const dropdownItem = style({
  display: "flex",
  alignItems: "center",

  height: "5rem",
  padding: "1.6rem 1.5rem",
  borderBottom: `1px solid ${vars.color.grey_4}`,
  color: vars.color.black,
  cursor: "pointer",
  ...vars.fontStyles.body3_r_14,
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.grey_2,
    },
  },
});

export const selectBox = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1.7rem 0 2rem",
    height: "6rem",
    borderRadius: "1.2rem",
    cursor: "pointer",
  },
  variants: {
    isOpen: {
      true: {
        backgroundColor: vars.color.white,
        boxShadow: `inset 0 0 0 2px ${vars.color.mint_500}`,
        ...vars.fontStyles.subtitle2_m_16,
      },
      false: {
        boxShadow: `inset 0 0 0 1px ${vars.color.grey_5}`,
        ...vars.fontStyles.subtitle2_m_16,
      },
    },
  },
});

export const placeholderText = recipe({
  base: {
    ...vars.fontStyles.subtitle2_m_16,
    color: vars.color.grey_6,
  },
  variants: {
    isSelected: {
      true: {
        color: vars.color.black,
        ...vars.fontStyles.subtitle2_m_16,
      },
      false: {},
    },
  },
});
