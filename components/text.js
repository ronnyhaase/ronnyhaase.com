import tag from 'clean-tag'
import styled from 'styled-components'

import type from '../styles/utils/type'

const Text = styled(tag)`
  ${type}
`
Text.defaultProps = {
  blacklist: ['fontFamily', 'fontSize', 'fontWeight', 'p', 'pb', 'textAlign', 'textShadow']
}

export default Text
