import styled, { keyframes } from 'styled-components'

import { Animation } from '../'

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    transform: scale3d(1.3, 1.3, 1.3)
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1)
  }
`

const ZoomIn = styled(Animation)`
  animation-name: ${zoomIn};
  animation-fill-mode: forwards;
  opacity: 0;
`

export default ZoomIn
