// React JS
import React, { useEffect } from 'react'
// Next JS
import { useRouter } from 'next/router'
// Firebase Auth
import { useAuth } from '../firebase/contexts/AuthContext'

const ProtectedRoute = ({ children }:any) => {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        !user && router.push('/auth/login')
    }, [ router, user ])

    return <> { user ? children : null } </> 
}

export default ProtectedRoute