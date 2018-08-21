import tag from 'clean-tag'
import styled from 'styled-components'
import { boxShadow } from 'styled-system'

const IconButton = styled(tag)`
  display: inline-flex;
  padding: 16px;
  border: 3px solid #fff;
  border-radius: 100%;
  background: ${({ outlined, theme }) => outlined ? 'transparent' : theme.color.background};
  ${boxShadow}
`
IconButton.defaultProps = {
  is: 'button'
}

const IconButtonLink = styled(IconButton)`
  color: #fff;
`
IconButtonLink.defaultProps = {
  is: 'a'
}

export { IconButton, IconButtonLink }
