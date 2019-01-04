import styled from 'styled-components'
import {
  alignItems,
  alignSelf,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  justifyContent,
  order,
  space,
  width
} from 'styled-system'
import tag from 'clean-tag'

const Box = styled(tag)`
  ${alignItems}
  ${alignSelf}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${fontSize}
  ${justifyContent}
  ${order}
  ${space}
  ${width}
`
Box.defaultProps = {
  blacklist: [
    'bg',
    'color',
    'fontSize',
    'maxWidth',
    'py'
  ]
}

export default Box
