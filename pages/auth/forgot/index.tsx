// React JS
import React, { useState } from 'react'
// Next JS
import Link from 'next/link'
// Firebase Auth
import { useAuth } from '../../../firebase/contexts/AuthContext'

const index = () => {

    const { forgotPassword } = useAuth()

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [sentEmail, setSentEmail] = useState(false)

    const handleForgotPassword = (event: any) => {
        // Prevent page reload
        event.preventDefault()

        setError('')

        try {
            forgotPassword(email)
            setSentEmail(true)
        } catch (error: any) {
            setError(error.message)
        }
    }


    return (

        <div className='bg-white dark:bg-gray-900'>
            <div className='flex justify-center h-screen'>
                <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
                    <div className='flex-1'>
                        <div className='text-center'>
                            <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>Order App Name</h2>
                            {
                                error === '' ?
                                    sentEmail === false && <p className='mt-3 text-gray-500 dark:text-gray-300'>Forgot Password.</p>
                                    :
                                    <p className='mt-3 text-red-400 dark:text-red-800'>{error}</p>
                            }
                        </div>
                        {
                            !sentEmail ?
                                <div className='mt-8'>
                                    <form onSubmit={handleForgotPassword}>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>Email Address</label>
                                            <input
                                                onChange={event => setEmail(event.target.value)}
                                                type='email' name='email' id='email' placeholder='example@example.com' className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40' />
                                        </div>

                                        <div className='mt-6'>
                                            <button
                                                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                                                Reset password
                                            </button>
                                        </div>

                                    </form>

                                    <p className='mt-6 text-sm text-center text-gray-400'>Go back to the <Link href='/auth/login'><a className='text-blue-500 focus:outline-none focus:underline hover:underline'>log in page</a></Link>.</p>
                                </div>
                                :
                                <>
                                    <div className='flex flex-col items-center my-5'>
                                        <h1 className='text-xl dark:text-gray-200'>Password reset email sent.</h1>
                                        <p className='dark:text-gray-200'>Please check your inbox and your spam folder</p>
                                    </div>
                                    <div className='flex flex-col items-center my-5'>
                                        <p className='mt-6 text-sm text-center text-gray-400'>Back to <Link href='/auth/login'><a className='text-blue-500 focus:outline-none focus:underline hover:underline'>log in</a></Link>.</p>
                                    </div>
                                </>
                        }

                    </div>
                </div>
                <div className='hidden bg-cover lg:block lg:w-2/3 bg-yellow-200'>
                    <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
                        <div>
                            <h2 className='text-4xl font-bold text-white'>Forgot password</h2>

                            <p className='max-w-xl mt-3 text-gray-300'>Don't worry, it happens to the best of us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default index