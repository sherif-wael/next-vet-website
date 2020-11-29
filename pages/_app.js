import ThemeProvider from "../components/theme/ThemeProvider";
import { GlobalStyle } from "../styles";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
