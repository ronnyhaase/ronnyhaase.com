/**
 * Animates content to be opaque and to fade in from the left
 */
import styled, { keyframes } from 'styled-components'

import { Animation } from '../'

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-25%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const FadeInLeft = styled(Animation).attrs({
  animationName: fadeInLeft,
  animationFillMode: 'forwards'
})`
  opacity: 0;
`

export default FadeInLeft
