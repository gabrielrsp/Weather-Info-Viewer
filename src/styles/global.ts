import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #2e3542;
    --red: #d63230;
    --blue: #1c77c3;
    --blue-light: #39a9db;
    --blue-lighter: #40bcd8;
    --orange: #f39237;
    --text-title: #363F5F;
    --text-body: #343c4b;
    --background: #F0F2F5;
    --shape: #FFFFFF;

    display: flex;
      justify-content: center;
      
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;

    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #fff;
  }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: #fff;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`
