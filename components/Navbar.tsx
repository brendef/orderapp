// React.js
import React, { useState } from 'react'

const Navbar = ({
  title = { text: 'brand', to: '/' },
  navLinks = [
    {text: 'about', to: 'about', textSize: 'sm', mobileTextSize: '2xl'},
    {text: 'places', to: 'places', textSize: 'sm', mobileTextSize: '2xl'},
    {text: 'contact', textSize: 'sm', mobileTextSize: '2xl'},
  ],
  menuButtons = [
    {text: 'login', to: 'auth/login', colour: 'primary', hoverColour: 'primary-600', textSize: 'sm', mobileTextSize: 'lg', padding: 'px-2 py-5 md:px-4 md:py-2'},
    {text: 'join for free', to: 'auth/register', colour: 'secondary', textSize: 'sm', mobileTextSize: 'lg', padding: 'px-2 py-5 md:px-4 md:py-2'},
  ],
}:any) => {

  // Scopped CSS
  const renderCSS = () => {
    <style jsx> {`
      .scroll-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent;
      }
    `} </style>
  }

  // State
  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      {renderCSS()}

      <nav className='bg-white shadow dark:bg-gray-800'>
        <div className='container px-6 py-3 mx-auto'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <a 
                  className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300' 
                  href={ title ? title.to : '#' }
                >
                  { title ? title.text : title }
                </a>
              </div>
              {/* Mobile menu button */}
              <div className='flex md:hidden'>
                <button
                  type='button'
                  className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                  aria-label='toggle menu'
                  onClick={() => setMobileMenu(!MobileMenu)}
                >
                  {
                    MobileMenu ?
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                          fill="currentColor"
                        />
                      </svg>
                      :
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                          fill="currentColor"
                        />
                        <path
                          d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                          fill="currentColor"
                        />
                        <path
                          d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                          fill="currentColor"
                        />
                      </svg>
                  }
                </button>
              </div>
            </div>

            <div className={`items-center md:flex ${MobileMenu ? 'block' : 'hidden'}`}>
              <div className='flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1'>
                {
                  navLinks.map((link:any, index:any) => {
                    const useLinkText = link.text ? link.text : link
                    const useLinkTo = link.to ? link.to : '#'
                    const useLinkTextSize = link.textSize ? link.textSize : 'sm'
                    const useMobileLinkTextSize = link.mobileTextSize ? link.mobileTextSize : '2xl'
                    return (
                      <a 
                        key={index} 
                        className={`my-5 text-${useMobileLinkTextSize} md:text-${useLinkTextSize} leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0`}
                        href={useLinkTo}
                      >
                        {useLinkText}
                      </a>
                    )
                  })
                }

              </div>
              <div className='flex items-center py-2 -mx-1 md:mx-0'>
                {
                  menuButtons.map((button:any, index:any) => {
                    const useButtonText = button.text ? button.text : button
                    const useButtonTo = button.to ? button.to : '#'
                    const useColour = button.colour ? button.colour : 'primary'
                    const useHoverColour = button.hoverColour ? button.hoverColour : 'secondary'
                    const useButtonTextSize = button.textSize ? button.textSize : 'sm'
                    const useMobileButtonTextSize = button.mobileTextSize ? button.mobileTextSize : '2xl'
                    const usePadding = button.padding ? button.padding : ''

                    return (
                      <a 
                        key={index}
                        className={`block w-1/2 ${usePadding} mx-1 text-${useMobileButtonTextSize} md:text-${useButtonTextSize} font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-${useColour} rounded-md hover:bg-${useHoverColour} md:mx-2 md:w-auto`} 
                        href={useButtonTo}
                      >
                        {useButtonText}
                      </a>
                    )})
                }
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar