import jump from 'jump.js'
import React from 'react'
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'react-feather'
import Particles from 'react-particles-js'
import { Box } from 'grid-styled'

import { Container, Headline, IconButtonLink, IconButton, Image, SROnly, Slide } from '../../components'
import { FadeInBottom, FadeInLeft, FadeInRight, FadeIn, ZoomIn } from '../../components/animations'
import particlesConfig from '../../styles/particles-config'

const Intro = () => (
  <Slide bg="#67afb7" color="#ffffff">
    <FadeIn animationDuration="2s">
      <Particles params={particlesConfig} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }} />
    </FadeIn>
    <Container>
      <FadeInLeft animationDelay="1s" animationDuration="1.5s">
        <Headline is="h1" p="1em 0 0 0" textAlign="center" textShadow="1px 1px 6px rgba(0,0,0,.5)">
          Ronny Haase
        </Headline>
      </FadeInLeft>
      <FadeInRight animationDelay="1s" animationDuration="1.5s">
        <Headline is="h2" p="1em 0 0.5em 0" textAlign="center" textShadow="1px 1px 6px rgba(0,0,0,.5)">
          Software Engineer &amp; -Architect
        </Headline>
      </FadeInRight>
      <FadeInBottom animationDelay="1s" animationDuration="1.5s" py="1rem">
        <center>
          <Image
            alt="Ronny Haase (Photo)"
            border="3px solid #fff"
            rounded
            src="/static/ronnyhaase-square.jpg"
            boxShadow="0 0 12px rgba(0,0,0,.5)"
            maxHeight={['200px', 'none']}
          />
        </center>
      </FadeInBottom>
      <div>
        <center>
          <ZoomIn
            is={IconButtonLink}
            animationDelay="1250ms"
            animationDuration="750ms"
            href="https://github.com/ronnyhaase"
            mx="3px"
            outlined
          >
            <Github size={28} />
            <SROnly focusable>Link to Github profile</SROnly>
          </ZoomIn>
          <ZoomIn
            is={IconButtonLink}
            animationDelay="1500ms"
            animationDuration="750ms"
            href="https://linkedin.com/in/ronnyhaase"
            mx="3px"
            outlined
          >
            <Linkedin size={28} />
            <SROnly focusable>Link to LinkedIn profile</SROnly>
          </ZoomIn>
          <ZoomIn
            is={IconButtonLink}
            animationDelay="1750ms"
            animationDuration="750ms"
            href="https://twitter.com/ronnyhaase"
            mx="3px"
            outlined
          >
            <Twitter size={28} />
            <SROnly focusable>Link to Twitter profile</SROnly>
          </ZoomIn>
          <ZoomIn
            is={IconButtonLink}
            animationDelay="2000ms"
            animationDuration="750ms"
            href="mailto:ronhaase@gmail.com"
            mx="3px"
            outlined
          >
            <Mail size={28} />
            <SROnly focusable>Write me an e-mail</SROnly>
          </ZoomIn>
        </center>
      </div>
      <Box py="1rem">
        <center>
          <FadeIn
            is={IconButton}
            animationDelay="2500ms"
            animationDuration="500ms"
            aria-label="Scroll to further content"
            boxShadow="1px 1px 6px rgba(0,0,0,.5)"
            p="8px !important"
            onClick={() => jump('#about-me')}
          >
            <ArrowDown size={22} />
          </FadeIn>
        </center>
      </Box>
    </Container>
  </Slide>
)

export default Intro
