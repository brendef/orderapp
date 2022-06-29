// Next.js
import type { AppProps } from 'next/app'
// Firebase Auth Context
import { AuthContextProvider } from '../firebase/contexts/AuthContext'
// CSS
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <AuthContextProvider> <Component {...pageProps} /> </AuthContextProvider>
}

export default App
