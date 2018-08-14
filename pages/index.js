import Head from 'next/head'
import React, { Fragment } from 'react'

import { Intro, AboutMe } from '../partials/home'

const HomePage = () => (
  <Fragment>
    <Head>
      <title>Ronny Haase &bull; Frontend / Full-Stack Software Engineer &amp; Software Architect</title>
      <meta name="description" content="Frontend / Full-Stack Software Engineer and Software Architect, offering 10+ years building and designing systems at high-scale, proficient in JavaScript, ReactJS, NodeJS and Microservices." />
    </Head>
    <Intro />
    <AboutMe />
  </Fragment>
)

export default HomePage
