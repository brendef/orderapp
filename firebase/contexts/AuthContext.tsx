// React JS
import { createContext, useContext, useEffect, useState } from 'react'
// Firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
// Auth 
import { auth } from '../config'

const AuthContext = createContext<any>({})

export const AuthContextProvider = ({ children }:any) => {

  const [user, setUser] = useState<any>(null)

  const createUser = (email:any, password:any) => {
    // Place code to register a user with a provider here
    // this case: firebase
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authenticateUser = (email:any, password:any) => {
    // Place code to register a user with a provider here
    // this case: firebase
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => setUser(currentUser))    
    return () => unsubscribe()
  }, [])
  
  return <AuthContext.Provider value={{ user, createUser, authenticateUser }}>{ children }</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)