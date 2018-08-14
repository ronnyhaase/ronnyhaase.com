import {
  color,
  compose,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textColor,
  textStyle
} from 'styled-system'

import { textShadow } from './text'

const type = compose(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textColor,
  textStyle,
  textShadow
)

export default type
