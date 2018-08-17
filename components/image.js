import styled from 'styled-components'
import { border, boxShadow, maxHeight, maxWidth, space } from 'styled-system'

const Image = styled.img`
  height: auto;
  ${({ rounded }) => rounded ? `border-radius: 100%;` : ''}
  ${border}
  ${boxShadow}
  ${space}
  ${maxHeight}
  ${maxWidth}
`
Image.defaultProps = {
  maxWidth: '100%'
}

export default Image
