import { font, color } from './variables'

export default `
  html {
    box-sizing: border-box;
    font-size: ${font.size.base}px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${font.family.sans};
    font-size: ${font.size.rg};
    line-height: 1.75;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 1em 0;
    line-height: 1;
  }

  h1 {
    font-size: ${font.size.xl}
  }

  h2 {
    font-size: ${font.size.lg}
  }

  a {
    color: ${color.link}
  }
`
