import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-regular.ttf');
  }

  * {
    font-family: 'Poppins', sans-serif;

    --primary-font-cl: #f2f7f4;

    --primary-cl: #20c967;
    --primary-cl-light: #34db7a;
    --white: #fff;
    --red: #e74454;
    --yellow: #f9cb40;

    --header-1: 64px;
    --header-2: 48px;
    --header-3: 42px;
    --header-4: 32px;

    --text-medium: 10px;
    --text-regular: 16px;
    --text-light: 13px;

    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;
  }

  body {
    overflow: overlay;
    background-color: var(--white);
  }

  span {
    color: var(--primary-cl);
  }

  .btn {
    margin: 2px;
    padding: .375rem 1.5rem;
    border-radius: 6px;

    font-size: var(--text-regular);
    font-weight: var(--font-weight-medium);

    &, * {
      transition: .2s;
      color: var(--primary-font-cl) !important;
      text-decoration: none;
    }
  }

  .btn.btn-primary:focus,
  .navbar-toggler:focus,
  .form-control:focus {
    box-shadow: 0 0 0 0.25rem rgba(67, 237, 116, .8);
  }

  .btn.btn-primary {
    margin: 5px;

    background-color: var(--primary-cl);
    border-color: var(--primary-cl-light);

    &:hover *,
    &:hover {
      color: var(--white) !important;
      background-color: var(--primary-cl-light);
    }
  }

  *::selection {
    color: var(--white);
    background-color: var(--primary-cl);
  }

  *::-webkit-scrollbar {
    width: 6px;

    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: var(--primary-cl);
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

      background-color: var(--primary-cl);
    }
  }

  .pace-inactive {
    display: none;
  }
`
