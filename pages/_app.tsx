// Next.js
import type { AppProps } from 'next/app'

// CSS
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  
  return <Component {...pageProps} />

}

export default App
