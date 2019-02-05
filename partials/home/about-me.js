import React from 'react'
import { FileText } from 'react-feather'

import { Box, Container, Headline, Text, OutlinedButton } from '../../components'
import { color, font } from '../../styles/variables'

const AboutMe = () => (
  <div id="about-me">
    <Box bg={color.backgroundDarker}>
      <Container>
        <Headline is="h2" fontWeight="400" textAlign="center">
          About me
        </Headline>
      </Container>
    </Box>
    <Container py="1rem">
      <center>
        <OutlinedButton is="a" href="/static/CV-ronnyhaase.pdf">
          <FileText />
          <span>Download my CV (PDF)</span>
        </OutlinedButton>
      </center>
      <Text fontFamily={font.family.sans}>
        <p>Hi! I am Ronny.</p>
        <p>
          I'm developing reliable, maintainable and scalable web based solutions for more than 10
          years with focus but by no means limited to front-end engineering, and built and lead great
          teams to do the same.<br />
          I offer excellent knowledge and multiple years of experience with designing, developing, testing and optimizing highly-scalable web solutions as well as enabling teams to be productive & motivated, and grow personally and professionally.
        </p>
        <p>
          I've been working and consulting for companies at different stages (Startup to DAX-100), as well as products (MVE to massive scale), and agile teams of different size and experience. I am giving presentations, training and mentorship on front-end and software-architecture topics either in general or for concrete projects.
        </p>
      </Text>
    </Container>
  </div>
)

export default AboutMe
