// Next.js
import type { NextPage } from 'next'
// Components
import Layout from '../components/Layout'
import { AuthContextProvider } from '../firebase/contexts/AuthContext'
// -----------------------------------------------------------------------------------------------------------------------

// index
const Home: NextPage = () => {
  return (
      <Layout>
        hello world!
      </Layout>
  )
}

export default Home
