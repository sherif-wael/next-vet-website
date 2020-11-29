import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import MagicScriptTag from "../components/theme/MagicScriptTag";
import FallBackStyles from "../components/theme/FallBackStyles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(){
    return (
      <Html>
        <Head>
          <FallBackStyles />
        </Head>
        <body>
          <Main />
          <MagicScriptTag />
          <NextScript />
        </body>
      </Html>
    )
  }
}
