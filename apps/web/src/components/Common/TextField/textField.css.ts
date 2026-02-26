import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const textFieldWrapper = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    height: "6rem",
    padding: "0 1.7rem 0 2rem",
    borderRadius: "12px",
  },
  variants: {
    isTextFieldActivated: {
      true: {
        backgroundColor: vars.color.white,
        boxShadow: `inset 0 0 0 2px ${vars.color.mint_500}`,
      },
      false: {
        backgroundColor: vars.color.grey_2,
      },
    },
    isError: {
      true: {
        boxShadow: `inset 0 0 0 2px ${vars.color.red_2}`,
      },
    },
    disabled: {
      true: {
        backgroundColor: vars.color.grey_4,
        boxShadow: `inset 0 0 0 1px ${vars.color.grey_5}`,
      },
    },
  },
});

export const inputWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

export const animatedPlaceholder = recipe({
  base: {
    position: "absolute",
    left: 0,
    transformOrigin: "left",
    transition: "all 0.2s ease",
    pointerEvents: "none",
  },
  variants: {
    placeholderState: {
      active: {
        color: vars.color.mint_500,
        transform: "translateY(-1rem)",
        ...vars.fontStyles.caption1_m_11,
      },
      inactive: {
        color: vars.color.grey_6,
        transform: "translateY(0)",
        ...vars.fontStyles.subtitle2_m_16,
      },
      error: {
        color: vars.color.red_2,
        transform: "translateY(-1rem)",
        ...vars.fontStyles.caption1_m_11,
      },
    },
  },
});

export const textFieldInput = recipe({
  base: {
    width: "100%",
    padding: 0,
    border: "none",
    outline: "none",
    background: "transparent",
    ...vars.fontStyles.subtitle2_m_16,
  },
  variants: {
    isTextFieldActivated: {
      true: {
        transform: "translateY(1rem)",
      },
      false: {
        transform: "translateY(0)",
      },
    },
    disabled: {
      true: {
        color: vars.color.grey_6,
        cursor: "not-allowed",
      },
    },
  },
});

export const helperText = recipe({
  base: {
    marginTop: "0.8rem",
    paddingLeft: "0.7rem",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "normal",
  },
  variants: {
    isError: {
      true: {
        color: vars.color.red_2,
      },
      false: {
        color: vars.color.mint_500,
      },
    },
  },
});
