import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize} //> 참조: https://necolas.github.io/normalize.css/latest/normalize.css
  
  * {
    box-sizing: border-box;
  } 

  html {
    font-size: 62.5%; //> 1rem = 10px;  
  }

  //^IE
  select::-ms-expand {
    display: none;
  }
  //# SELECT 기본 스타일 제거
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
    
  ${({ theme }) => {
    return css`
      body {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.family.san_serif};
        font-weight: ${theme.fonts.weight.normal};
        font-size: ${theme.fonts.size.md};
      }
    `;
  }}
`;

export default GlobalStyle;
