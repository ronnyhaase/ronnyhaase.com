import tag from 'clean-tag'
import styled from 'styled-components'
import { boxShadow, space } from 'styled-system'

import { animations } from '../styles/utils/animations'

const Animation = styled(tag)`
  ${animations}
  ${boxShadow}
  ${space}
`
Animation.defaultProps = {
  blacklist: [
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
