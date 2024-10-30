import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}

const colors = {
  main_mint: "#14C3BC",
  sub_1: "#A1E7E4",
  sub_2: "#E0FFFE",
  sub_3: "#F3FDFC",
  black_1: "#212121",
  black_2: "#333333",
  gray_1: "#666666",
  gray_2: "#888888",
  gray_3: "#999999",
  light_1: "#D9D9D9",
  light_2: "#F0F0F0",
  light_3: "#FBFBFB",
  light_4: "#FFFFFF",
  blue_gray: "#F1F5F5",
};

const fonts = {
  title1: {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: "2.4rem",
    lineHeight: 1.36,
  },
  title2: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: 1,
  },
  subtitle1: {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: "1.6rem",
    lineHeight: 1,
  },
  subtitle2: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "1.6rem",
    lineHeight: 1,
  },
  body1: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    fontSize: "1.6rem",
    lineHeight: 1.36,
  },
  body2: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    fontSize: "1.4rem",
    lineHeight: "normal",
  },
  body3: {
    fontFamily: "Pretendard",
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: "normal",
  },
  description1: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    fontSize: "1.2rem",
    lineHeight: "normal",
  },
  description2: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "1.2rem",
    lineHeight: "1.36",
  },
  description3: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "0.8rem",
    lineHeight: "normal",
  },
};

const theme: Theme = {
  colors,
  fonts,
};

export default theme;
