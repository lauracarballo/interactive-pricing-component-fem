import { createGlobalStyle } from "styled-components";
import { primaryFont, typeScale } from "./typography";
import { normalize } from "polished";
import { neutral } from "./colors";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 15px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  height: 100%;
  font-family: ${primaryFont};
  color: ${neutral[400]};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}


h2 {
  font-weight: 800;
  font-size: ${typeScale.header2};
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${neutral[500]};
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
}


p {
    font-weight: 600;
    font-size: ${typeScale.paragraph};
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-top: 5px;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
  }
}
`;
