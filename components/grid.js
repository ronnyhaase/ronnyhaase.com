import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'
import { maxWidth } from 'styled-system'

import { containerMaxWidths } from '../styles/variables'

const Col = styled(Box)`
  flex: 1 1 auto;
  padding-left: ${({ theme }) => theme.gutterWidth / 2}px;
  padding-right: ${({ theme }) => theme.gutterWidth / 2}px;
`

const Row = styled(Flex)`
  flex: 1 1 auto;
  margin-left: ${({ theme }) => theme.gutterWidth / -2}px;
  margin-right: ${({ theme }) => theme.gutterWidth / -2}px;
`

const Container = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.gutterWidth / 2}px;
  padding-right: ${({ theme }) => theme.gutterWidth / 2}px;
  ${maxWidth}
`
Container.defaultProps = {
  maxWidth: containerMaxWidths
}

export { Col, Container, Row }
