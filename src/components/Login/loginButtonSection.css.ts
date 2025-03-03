import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const loginButtonSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.1rem",

  width: "100%",
  padding: "0 2rem",
});

export const kakaoLoginButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.9rem",

  width: "100%",
  height: "5.5rem",
  borderRadius: "1.2rem",

  backgroundColor: "#FEE500",
});

export const kakaoLoginButtonText = style({
  ...vars.fontStyles.subtitle1_sb_16,

  color: vars.color.grey_12,
});

export const naverLoginButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.9rem",

  width: "100%",
  height: "5.5rem",
  borderRadius: "1.2rem",

  backgroundColor: "#03C75A",
});

export const naverLoginButtonText = style({
  ...vars.fontStyles.subtitle1_sb_16,

  color: vars.color.white,
});

export const googleLoginButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.9rem",

  width: "100%",
  height: "5.5rem",
  borderRadius: "1.2rem",

  boxShadow: `inset 0 0 0 1px ${vars.color.grey_5}`,
});

export const googleLoginButtonText = style({
  ...vars.fontStyles.subtitle1_sb_16,

  color: vars.color.grey_12,
});
