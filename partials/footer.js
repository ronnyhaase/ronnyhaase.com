import React from 'react'
import { withTheme } from 'styled-components'

import { Box, Container, Text } from '../components'

const Footer = ({ theme }) => (
  <Box bg={theme.color.text} color={theme.color.background} fontSize={theme.font.size.sm} py="1rem">
    <Container>
      <p>
        Copyright &copy; Ronny Haase, 2011 - 2019<br />
        <small>The <a href="https://github.com/ronnyhaase/ronnyhaase.com">code of this website</a> is open source under <a href="https://opensource.org/licenses/GPL-3.0">GPL v3</a></small>
      </p>
      <p pb=".5rem"><a href="#">Back to Top</a></p>
      <p>
        <a href="https://github.com/ronnyhaase">GitHub</a>&nbsp;&bull;&nbsp;
        <a href="https://linkedin.com/in/ronnyhaase">LinkedIn</a>&nbsp;&bull;&nbsp;
        <a href="https://twitter.com/ronnyhaase">Twitter</a>
      </p>
      <Text is="p" fontSize={theme.font.size.xs}>
        This site uses Google Analytics, anonymizing your IP and without cookies,
        and only to analyze page views.<br />
        If you enabled Do Not Track, you won't get tracked at all.
      </Text>
    </Container>
  </Box>
)

export default withTheme(Footer)
