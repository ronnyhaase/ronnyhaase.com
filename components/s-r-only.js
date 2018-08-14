import tag from 'clean-tag'
import styled from 'styled-components'

const SROnly = styled(tag)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;

  ${({ focusable }) => focusable ? `
    &:active,
    &:focus {
      position: static;
      width: auto;
      height: auto;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }
  ` : ''}
`

export default SROnly
