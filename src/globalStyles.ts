import { createGlobalStyle} from "styled-components"
import { Theme } from "./themes"

export default createGlobalStyle<{theme: Theme}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Roboto, Tahoma, Helvetica, Arial, sans-serif;
    transition: all 0.50s linear;
  }
  button {
    border: ${({theme}) => `1px solid ${theme.buttonBorder}`};
    background-color: ${({theme}) => theme.button};
    color: ${({theme}) => theme.buttonTint};
    border-radius: 2px;
    padding: 5px;
  }
  h1 {
    font-size: 8vw;
  }
  h2 {
    font-size: 4vw;
  }
  p {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
    /* For tablets and desktops: */
    h1 {
    font-size: 35pt;
    }
    h2 {
      font-size: 18pt;
    }
    p {
      font-size: 12pt;
    }
  }
`