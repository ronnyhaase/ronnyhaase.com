import React from 'react'

import { Container, Headline, Text } from '../../components'
import { color, font } from '../../styles/variables'
import { Box } from 'grid-styled'

const AboutMe = () => (
  <div id="about-me">
    <Box bg={color.backgroundDarker}>
      <Container>
        <Headline is="h2" fontWeight="300" textAlign="center" serif>
          About me
        </Headline>
      </Container>
    </Box>
    <Container py="1rem">
      <Text fontFamily={font.family.sans}>
        <p>Hi! I am Ronny.</p>
        <p>
          I'm developing web based solutions for more than 10 years with focus but not limited to
          front-end development. I offer excellent knowledge and multiple years of experience with
          designing, developing, testing and optimizing scalable web solutions.
        </p>
        <p>
          I've been working with companies at different stages (Startup to DAX-100), as well as
          products (MVE to massive scale), and agile teams of different size and experience - also
          taking leadership responsibilities - and was giving presentations, training and mentorship
          on front-end and architecture topics either in general or for concrete projects.
        </p>
      </Text>
    </Container>
  </div>
)

export default AboutMe
