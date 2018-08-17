import React from 'react'
import { Box } from 'grid-styled'
import { withTheme } from 'styled-components'

import { Container, Text } from '../components'

const Footer = ({ theme }) => (
  <Box bg={theme.color.text} color={theme.color.background} fontSize={theme.font.size.sm} py="1rem">
    <Container>
      <p>
        Copyright &copy; Ronny Haase, 2011 - 2018
      </p>
      <p>
        <p><a href="#">Back to Top</a></p>
        <a href="https://github.com/ronnyhaase">GitHub</a>&nbsp;&bull;&nbsp;
        <a href="https://linkedin.com/in/ronnyhaase">LinkedIn</a>&nbsp;&bull;&nbsp;
        <a href="https://twitter.com/ronnyhaase">Twitter</a>
      </p>
    </Container>
  </Box>
)

export default withTheme(Footer)
