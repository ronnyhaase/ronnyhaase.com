import App, { Container } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import * as theme from '../styles/variables'
const Footer = dynamic(() => import('../partials/footer'))

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Fragment>
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
