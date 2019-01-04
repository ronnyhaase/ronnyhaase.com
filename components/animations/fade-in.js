/**
 * Animates content to be opaque and to fade in
 */
import styled, { keyframes } from 'styled-components'

import { Animation } from '../'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeIn = styled(Animation)`
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  opacity: 0;
`

export default FadeIn
