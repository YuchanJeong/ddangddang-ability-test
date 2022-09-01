//# 사이즈
export const size = {
  sm: ".5rem",
  md: "1rem",
  lg: "2rem",
  xl: "3rem",
  br: "5px",
};

//# 폰트
export const fonts = {
  family: {
    san_serif: "sans-serif",
    serif: "serif",
  },
  size: {
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
    title: "6rem",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

//# 미디어 쿼리 (부트스트랩 기준)
const mediaSize = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
};

export const device = {
  mobile: `@media only screen and (max-width: ${mediaSize.mobile})`,
  tablet: `@media only screen and (max-width: ${mediaSize.tablet})`,
  laptop: `@media only screen and (max-width: ${mediaSize.laptop})`,
};

//# 색상
const colors = {};

export const lightThemeColors = {
  ...colors,
  accent: "#C8A2C8",
  text: "#222120",
  primary: "#FAFAFA",
};

const darkThemeColors = {
  ...colors,
  accent: "#7F00FF",
  text: "#FAFAFA",
  primary: "#222120",
};

//# 공통 스타일 모음
const defaultStyle = {
  size,
  fonts,
  device,
};

//# 각 테마
export const lightTheme = {
  ...defaultStyle,
  colors: lightThemeColors,
};

export const darkTheme = {
  ...defaultStyle,
  colors: darkThemeColors,
};

//# 기본 테마
declare module "styled-components" {
  export interface DefaultTheme {
    size: typeof size;
    fonts: typeof fonts;
    device: typeof device;
    colors: typeof lightThemeColors;
  }
}
