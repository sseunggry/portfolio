import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, 
    h1, h2, h3, h4, h5, h6, p, blockquote, pre, 
    a, abbr, acronym, address, big, cite, code, 
    del, dfn, em, img, ins, kbd, q, s, samp, 
    small, strike, strong, sub, sup, tt, var, 
    b, u, i, center, 
    dl, dt, dd, ol, ul, li, 
    fieldset, form, label, legend, 
    table, caption, tbody, tfoot, thead, tr, th, td, 
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary, 
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button, input, optgroup, select, textarea {
      color: inherit;
      font: inherit;
      margin: 0;
    }

    button {
        overflow: visible;
        outline: none;
        -webkit-touch-callout: none;
        border: 0;
        padding: 0;
        background-color: transparent;
    }

    button, select {
      text-transform: none;
    }

    button, html input[type="button"], input[type="reset"], input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
    }

    /* add */
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Outfit', 'Noto Sans KR', sans-serif;
        line-height: 1.4;
        letter-spacing: 1px;
        background-color: #fff;
        color: #000;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    .blind{
        overflow: hidden;
        border: 0;
        position: relative;
        z-index: -1;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
    .outfit{
        font-family: 'Outfit', sans-serif;
    }
    .poppins{
        font-family: 'Poppins', sans-serif;
    }
    .playfair{
        font-family: 'Playfair Display', serif;
    }
    
    section{
        min-height: 100vh;
    }
    
    .mask{
        overflow: hidden;
        display: block;
        
        span{
            display: inline-block;
        }
    }
`;

export default GlobalStyle;