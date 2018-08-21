import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import Text from './text'

const Headline = styled(({ serif, ...rest }) => (<Text {...rest} />))`
  ${({ serif, theme }) => serif ? `font-family: ${theme.font.family.serif};` : ''}
  ${space}
`

export default Headline
