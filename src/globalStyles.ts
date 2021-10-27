import { createGlobalStyle} from "styled-components"
import { Theme } from "./themes"

// const Ubuntu = require('./fonts/Ubuntu.woff')

export default createGlobalStyle<{theme: Theme}>`
  /* @font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu'), url('fonts/Ubuntu.woff') format('woff'), url('Ubuntu.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'Ubuntu Mono';
    src: local('UbuntuMono'), local('Ubuntu Mono'), url('UbuntuMono.woff') format('woff'), url('UbuntuMono.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  } */
  html, body, p, button {
    /* height: 100vh;
    overflow: hidden; */
    font-family: Ubuntu;
  }
  body {
    /* overflow: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.50s linear, color 0.50s linear;
    font-family: Ubuntu;
  }
  button {
    border: ${({theme}) => `1px solid ${theme.buttonBorder}`};
    background: linear-gradient(transparent,rgba(0, 0, 0, 0.4)) top/100% 800%;
    background-color: ${({theme}) => theme.button};
    color: ${({theme}) => theme.buttonTint};
    border-radius: 2px;
    padding: 5px;
    transition: all 0.50s linear, background 0.1s linear;
    pointer-events: auto;
  }
  button:hover, button:active {
    background-position:bottom;
    border-color: ${({theme}) => theme.buttonBorderActive};
  }
  h1, h2, h3, h4, h5 { 
    line-height: 1em;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.25em;
  }
  p {
    font-size: 1em;
  }

`