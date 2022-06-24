// Next.js
import type { AppProps } from 'next/app'
// CSS
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
