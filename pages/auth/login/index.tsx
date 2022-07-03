// React JS
import React, { useState } from 'react'
// Next JS
import Link from 'next/link'
// Firebase Auth
import { useAuth } from '../../../firebase/contexts/AuthContext'
import { useRouter } from 'next/router'
// External Packagers
import * as EmailValidator from 'email-validator'

const index = () => {

  const { authenticateUser } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleLogin = async (event: any) => {
    event.preventDefault() // Prevent page reload
    setError('')
    
    // Validate email
    if (!EmailValidator.validate(email)) return setError('Please enter a valid email address')

    try {
      await authenticateUser(email, password)
      router.push('/home')
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (

    <div className='bg-white dark:bg-gray-900'>
      <div className='flex justify-center h-screen'>
        <div className='hidden bg-cover lg:block lg:w-2/3 bg-blue-300'>
          <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
            <div>
              <h2 className='text-4xl font-bold text-white'>Welcome Back</h2>

              <p className='max-w-xl mt-3 text-gray-300'>Hey, it is good to see you again. Log in to your account to continue ordering your favourit food</p>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>Order App Name</h2>

              { error === '' ?
                  <p className='mt-3 text-gray-500 dark:text-gray-300'>Sign in to access your account</p>
                  :
                  <p className='mt-3 text-red-400 dark:text-red-800'>{error}</p> 
              }

            </div>

            <div className='mt-8'>
              <form onSubmit={handleLogin}>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>Email Address</label>
                  <input
                    onChange={event => setEmail(event.target.value)}
                    type='email' name='email' id='email' placeholder='example@example.com' className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40' />
                </div>

                <div className='mt-6'>
                  <div className='flex justify-between mb-2'>
                    <label htmlFor='password' className='text-sm text-gray-600 dark:text-gray-200'>Password</label>
                    <a href='#' className='text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline'>Forgot password?</a>
                  </div>

                  <input
                    onChange={event => setPassword(event.target.value)}
                    type='password' name='password' id='password' placeholder='Your Password' className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40' />
                </div>

                <div className='mt-6'>
                  <button
                    className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                    Sign in
                  </button>
                </div>

              </form>

              <p className='mt-6 text-sm text-center text-gray-400'>Don&#x27;t have an account yet? <Link href='/auth/register'><a className='text-blue-500 focus:outline-none focus:underline hover:underline'> Sign up </a></Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index