import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
    color: var(--font-cl);
    font-weight: normal;
    line-height: 1.33;
    font-size: min(4.2vw, 1.06rem);
    text-rendering: optimizeLegibility;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;

    image-rendering: optimizeQuality;
    
    list-style: none;
    appearance: none;
    outline: none;
    border: none;
    transition: all .2s;
    background-color: transparent;

    /* --font-cl: #e7f0ea; */
    --font-cl: #181818;
    /* --first-cl: #08313a; */
    --first-cl: white;
    --second-cl: #1a5653;
    --third-cl: #107869;
    --link-cl: #5cd85a;

    --box-shadow: 0px 0px 3px var(--third-cl);
  }

  ::selection {
    background-color: var(--link-cl);
  }

  ::-webkit-scrollbar {
    width: 6px;

    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--third-cl);
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: overlay;

    background-color: var(--first-cl);
  }

  .pace {
    user-select: none;
    pointer-events: none;

    .pace-progress {
      position: fixed;

      height: 3px;
      width: 100%;

      top: 0px;
      right: 100%;
      z-index: 99;

      background-color: var(--third-cl);
    }
  }

  .pace-inactive {
    display: none;
  }

  @media (max-width: 425px) {
    * {
      font-size: min(4vw, 1.8rem);
    }

    h1 {
      font-size: min(5.6vw, 2rem);
    }
  }
`
