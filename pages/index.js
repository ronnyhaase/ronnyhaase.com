import Head from 'next/head'
import React, { Fragment } from 'react'

import { Intro, AboutMe } from '../partials/home'

const HomePage = () => (
  <Fragment>
    <Head>
      <title>Ronny Haase &bull; Lead Frontend / Full-Stack Software Engineer &amp; Software Architect</title>
      <meta name="description" content="Lead Frontend / Full-Stack Software-Engineer &amp; -Architect. Designing and building reliable, maintainable &amp; highly-scalable software and leading teams to do the same." />
    </Head>
    <Intro />
    <AboutMe />
  </Fragment>
)

export default HomePage
