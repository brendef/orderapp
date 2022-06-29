// Next.js
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
// Firebase Auth Context
import { AuthContextProvider } from '../firebase/contexts/AuthContext'
// CSS
import '../styles/globals.css'

const openRoutes = [
  '/', 
  '/auth/login', 
  '/auth/register',
]

const App = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()
  return (
    <AuthContextProvider>{ 
      openRoutes.includes(router.pathname) ? 
        ( <Component {...pageProps} /> ) : 
        ( <ProtectedRoute> <Component {...pageProps} /> </ProtectedRoute> ) 
    }</AuthContextProvider>
  ) 

}

export default App
