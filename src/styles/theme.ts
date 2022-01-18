const colors = {
  black: "#000",
  brightGray: "#eee",
  bg_sidebar: "#313A46",
  bg_sidebar_over: "#262E38",
  grey: "#f0f0f0",
  grey02: "#C8C8C8",
  darkGray: "#4F4F4F",
  orange: "#ffa114",
  yellow: "#ecc371",
  primary: "#6667ab",
  txt_disabled_gray: "#BCBFDA",
  white: "#fff",
  whiteGray: "#f5f5f5",
  mint: "#20d8a1",
  olive: "#85a1ac",
  bg_color: "#f9f9ff",
  pink: "#e9435f",
};

const fontFamily = `'Noto Sans KR', -apple-system,
    BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Segoe UI', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;

const fontSizes = {
  size11: "1.1rem",
  size12: "1.2rem",
  size14: "1.4rem",
  size15: "1.5rem",
  size16: "1.6rem",
  size18: "1.8rem",
  size20: "2rem",
  size30: "3rem",
};

const theme = {
  colors,
  fontFamily,
  fontSizes,
};

export type CustomThemeType = typeof theme;

export default theme;
