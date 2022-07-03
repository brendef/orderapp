// Next.js
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// Firebase Auth Context
import { AuthContextProvider } from '../firebase/contexts/AuthContext'
// CSS
import '../styles/globals.css'
// Protected Routes
import { ProtectedRoutes } from '../routes.config'
// Components
import ProtectedRoute from '../components/ProtectedRoute'

const App = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()
  return (
    <AuthContextProvider>{ 
      !ProtectedRoutes.includes(router.pathname) ? 
        ( <Component {...pageProps} /> ) : 
        ( <ProtectedRoute> <Component {...pageProps} /> </ProtectedRoute> ) 
    }</AuthContextProvider>
  ) 

}

export default App
