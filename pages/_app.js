import App, { Container } from 'next/app'
import Head from 'next/head'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import * as theme from '../styles/variables'
import Footer from '../partials/footer'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyles />
            <Head>
              <title>Ronny Haase &bull; FullStack / Frontend Software Engineer &amp; -Architect</title>
            </Head>
            <Component {...pageProps} />
            <Footer />
          </Fragment>
        </ThemeProvider>
      </Container>
    )
  }
}
