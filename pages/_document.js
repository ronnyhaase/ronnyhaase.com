import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

import globalStyles from '../styles/global'

injectGlobal`${globalStyles}`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>Ronny Haase</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="theme-color" content="#000000" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <style>
            @import url(https://fonts.googleapis.com/css?family=Merriweather:300,400|Open+Sans)
          </style>
        </body>
      </html>
    )
  }
}
