// React JS
import { createContext, useContext, useEffect, useState } from 'react'
// Firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// Auth 
import { auth } from '../config'

const AuthContext = createContext<any>({})

export const AuthContextProvider = ({ children }: any) => {

  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email: any, password: any) => {
    // Place code to register a user with a provider here
    // this case: firebase
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authenticateUser = (email: any, password: any) => {
    // Place code to register a user with a provider here
    // this case: firebase
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  const forgotPassword = (email:any) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      currentUser ? setUser(currentUser) : setUser(null)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, createUser, authenticateUser, forgotPassword }}>{loading ? null : children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)