import { css } from "@emotion/react";

const resetCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    margin: 0;

    border: 0;
    font-size: 100%;

    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  body {
    position: relative;
    overscroll-behavior: none;

    line-height: 1;
    touch-action: manipulation;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  menu,
  ol,
  ul,
  li {
    padding-left: 0;
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    outline: none;

    border: none;
    background-color: transparent;
  }

  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  a {
    color: inherit;

    text-decoration: none;
  }
`;

const gStyle = css`
  ${resetCss}

  #root,
  body,
  html {
    margin: 0 auto;

    background-color: #f5f5f5;
    max-width: 43rem;
    height: 100dvh;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

    user-select: none;

    font-size: 62.5%;
  }

  body {
    display: flex;
    justify-content: center;

    scroll-behavior: smooth;
  }
  input,
  button {
    cursor: pointer;

    padding: 0;
  }

  @font-face {
    font-family: Pretendard;
    src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css") format ("woff");
    font-display: swap;
  }
`;

export default gStyle;
