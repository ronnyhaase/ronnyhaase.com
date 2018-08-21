import tag from 'clean-tag'
import styled from 'styled-components'
import { boxShadow } from 'styled-system'

const Button = styled(tag)`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.xl}`};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.max};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  ${boxShadow}
`
Button.defaultProps = {
  is: 'button'
}

const IconButton = styled(({ outlined, ...rest }) => (<Button {...rest} />))`
  padding: ${({ theme }) => theme.space.md};
  border: 3px solid ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: ${({ outlined, theme }) => outlined ? 'transparent' : theme.color.background};
  color: ${({ outlined, theme }) => outlined ? theme.color.background : theme.color.text};
`

const IconButtonLink = styled(IconButton)`
  color: ${({ theme }) => theme.color.background};
`
IconButtonLink.defaultProps = {
  is: 'a'
}

const OutlinedButton = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
  background: transparent;
`

export { Button, IconButton, IconButtonLink, OutlinedButton }
