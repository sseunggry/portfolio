import {css} from "styled-components";

const breakpoints = {
    small: '720px',
    medium: '1080px',
    large: '1200px',
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media screen and (max-width : ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return acc;
}, {});

export default media;