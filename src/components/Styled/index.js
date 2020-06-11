import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  :root {
    --bg: #0d3b66;
    --padsbg: #faf0ca;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Righteous', cursive;
  }

  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    min-height: 100vh;
    background: var(--bg);
  }
`;
