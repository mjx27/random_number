import { Global, css } from '@emotion/react';

import { constTheme } from '../lib/constants';
import type { ITheme } from '../models/interfaces';

const dynamicGlobalStyles = (theme: ITheme) => css`
  * {
    margin: 0;
    padding: 0;
    height: fit-content;
    width: fit-content;
    box-sizing: border-box;
    cursor: default;
    color: ${theme.colorTextMain};
    font-family: sans-serif;
  }

  #root {
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.gaps.gapMedium};
    background-color: ${theme.colorMain};
  }

  header {
    padding: ${theme.paddings.paddingLittle2};
    width: 100%;
    display: flex;
    justify-content: center;
  }

  main {
    height: 100%;
  }

  a {
    font-size: 0.875rem;
    text-decoration: none;
    color: transparent;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
  }

  input {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: text;
    transition: all 0.2s linear;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    appearance: none;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    color: ${theme.colorAdd2};
  }

  time {
    font-size: 0.75rem;
    color: ${theme.colorAdd2}40;
  }

  span {
    color: ${theme.colorTextAdd1};
  }

  svg {
    height: 40px;
    width: 40px;
  }

  #modal-root {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
  }
`;
export const GlobalStyles = () => {
  return <Global styles={dynamicGlobalStyles(constTheme)} />;
};
