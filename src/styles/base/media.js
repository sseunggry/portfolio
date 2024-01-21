import {css} from "styled-components";

export const breakpoints = {
    small: 720,
    sMedium: 840,
    medium: 980,
    large: 1200,
    xLarge: 1560
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