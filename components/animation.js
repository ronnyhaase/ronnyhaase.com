import tag from 'clean-tag'
import styled from 'styled-components'
import { boxShadow, space } from 'styled-system'

import Box from './box'
import { animations } from '../styles/utils/animations'

const Animation = styled(Box)`
  ${animations}
  ${boxShadow}
  ${space}
`
Animation.defaultProps = {
  blacklist: [
    ...Box.defaultProps.blacklist,
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'animations'
  ]
}

export default Animation
