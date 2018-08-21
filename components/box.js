import { Box as OriginalBox } from 'grid-styled'
import styled from 'styled-components'

const Box = styled(OriginalBox)``
Box.defaultProps = {
  blacklist: ['maxWidth']
}

export default Box
