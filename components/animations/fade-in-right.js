/**
 * Animates content to be opaque and to fade in from the right
 */
import styled, { keyframes } from 'styled-components'

import { Animation } from '../'

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(25%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const FadeInRight = styled(Animation).attrs({
  animationName: fadeInRight,
  animationFillMode: 'forwards'
})`
  opacity: 0;
`

export default FadeInRight
