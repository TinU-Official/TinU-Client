import { globalStyle } from "@vanilla-extract/css";

globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video",
  {
    padding: 0,
    margin: 0,
    border: 0,
    fontSize: "100%",
    verticalAlign: "baseline",
  },
);

globalStyle("article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section", {
  display: "block",
});

globalStyle("*[hidden]", {
  display: "none",
});

globalStyle("body", {
  position: "relative",
  overscrollBehavior: "none",
  lineHeight: 1,
  touchAction: "manipulation",
  fontFamily: "var(--font-pretendard)",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("menu, ol, ul, li", {
  paddingLeft: 0,
  listStyle: "none",
});

globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote::before, blockquote::after, q::before, q::after", {
  content: '""',
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

globalStyle("input", {
  appearance: "none",
});

globalStyle("input:focus", {
  outline: "none",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("#root, body, html", {
  margin: "0 auto",
  height: "auto",
  minHeight: "100dvh",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "@media": {
    "(min-width: 768px)": {
      maxWidth: "43rem",
    },
  },
});

globalStyle("#root::-webkit-scrollbar", {
  display: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html", {
  WebkitTouchCallout: "none",
  WebkitTapHighlightColor: "rgb(0 0 0 / 0%)",
  userSelect: "none",
  fontSize: "62.5%",
});

globalStyle("body", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  scrollBehavior: "smooth",
});

globalStyle("input", {
  cursor: "pointer",
  padding: 0,
});

globalStyle("button", {
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
