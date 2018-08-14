import tag from 'clean-tag'
import React from 'react'
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

const IconButtonLinkWrapper = styled(IconButton)`
  color: #fff;
`
const IconButtonLink = (props) => (<IconButtonLinkWrapper is="a" {...props} />)

export { IconButton, IconButtonLink }
