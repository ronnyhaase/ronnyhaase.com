/**
 * https://coolors.co/67afb7-ef8275-5b4b49-94bc7d-544e61
 */
const breakpoints = ['576px', '768px', '992px', '1200px']

const borderRadius = {
  max: '32767px'
}

const color = {
  background: '#ffffff',
  backgroundDarker: '#f0f7fb',
  link: '#a7c894',
  text: '#000000'
}

const containerMaxWidths = ['none', 540, 720, 960, 1140]

const _fontFamilySystem = '-apple-system, BlinkMacSystemFont, "Segoe UI", ' +
  'Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", ' +
  '"Segoe UI Emoji", "Segoe UI Symbol"'
const _fontFamilySans = 'Open Sans'
const _fontFamilySerif = 'Merriweather'

const font = {
  family: {
    sans: `${_fontFamilySans}, ${_fontFamilySystem}`,
    serif: `${_fontFamilySerif}, ${_fontFamilySystem}`
  },
  size: {
    base: 16,
    sm: '0.875rem',
    rg: '1.125rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem'
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    boldest: 900
  }
}

const gutterWidth = 30

const space = {}

export {
  breakpoints,
  borderRadius,
  color,
  containerMaxWidths,
  font,
  gutterWidth,
  space
}
