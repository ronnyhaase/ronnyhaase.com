import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, req }) {
    const doNotTrack = (req && req.headers['dnt'] === '1') || false
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, doNotTrack }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="theme-color" content="#000000" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: `
            ${this.props.doNotTrack ? "window['ga-disable-UA-24905421-1'] = true;" : ''}
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-24905421-1', {
              storeGac: false,
            });
            ga('set', 'anonymizeIp', true);
            ga('send', 'pageview');
          ` }} />
          <script async src="https://www.google-analytics.com/analytics.js" />
        </body>
      </html>
    )
  }
}
