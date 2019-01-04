/**
 * Animates content to be opaque and to fade in from the bottom
 */
import styled, { keyframes } from 'styled-components'

import { Animation } from '../'

const fadeInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const FadeInBottom = styled(Animation)`
  animation-name: ${fadeInBottom};
  animation-fill-mode: forwards;
  opacity: 0;
`

export default FadeInBottom
