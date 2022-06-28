// React JS
import React, { useState } from 'react'
// Firebase
import { createUser } from '../../../firebase/functions/Authentication'

const index = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleRegister = ( event:any ) => {
        event.preventDefault()
        createUser(email, password)
    }

    return (

        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Order App Name</h2>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">Create an account for free.</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input 
                                        onChange={ event => setEmail(event.target.value) }
                                        type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    </div>

                                    <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 my-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    
                                    <label htmlFor="confirmPassword" className="text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                                    <input 
                                        onChange={ event => setPassword(event.target.value) }
                                        type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Join for free
                                    </button>
                                </div>

                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">Already have an account? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign in</a>.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-cover lg:block lg:w-2/3 bg-red-300">
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Welcome</h2>

                            <p className="max-w-xl mt-3 text-gray-300">Create an account to start ordering your favourite food!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index