import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Georgia, "URW Bookman L", serif;
    color: #111;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Georgia, "URW Bookman L", serif;
    margin: 0;
  }

  a {
    font-family: Georgia, "URW Bookman L", serif;
    font-size: 16px;

    text-decoration: none;
    color: rgba(0, 0, 0, .68);;
  }
`;

export default GlobalStyle;
