import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

export default createGlobalStyle<{ theme: Theme }>`
  html, body {
    overflow-y: auto;
  }
  body {
    max-height: 100vh;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: proximity;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y proximity;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.50s linear, color 0.50s linear;
  }
  button {
    border: ${({ theme }) => `1px solid ${theme.buttonBorder}`};
    background: linear-gradient(transparent,rgba(0, 0, 0, 0.4)) top/100% 800%;
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonTint};
    border-radius: 2px;
    padding: 5px;
    transition: all 0.50s linear, background 0.1s linear;
  }
  button:hover, button:active {
    background-position:bottom;
    border-color: ${({ theme }) => theme.buttonBorderActive};
  }
  h1, h2, h3, h4, h5 { 
    line-height: 1em;
  }
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  p {
    font-size: 1em;
  }

`;
