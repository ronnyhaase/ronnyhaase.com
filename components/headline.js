import tag from 'clean-tag'
import styled from 'styled-components'
import { space, textAlign, fontWeight } from 'styled-system'

import { textShadow } from '../styles/utils/text'

const Headline = styled(tag)`
  ${({ serif, theme }) => serif ? `font-family: ${theme.font.family.serif};` : ''}
  ${fontWeight}
  ${space}
  ${textAlign}
  ${textShadow}
`

export default Headline
