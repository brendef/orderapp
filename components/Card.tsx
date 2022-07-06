import React from 'react'

const Card = ({
    title = 'Card header',
    body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit',
    price = '300',
    currency = 'R'
}) => {

    return (

        <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-blue-500">  </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{ title }</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{ body }</p>

                <div className="flex justify-between mt-5 item-center">

                    <h1 className="text-3xl mt-2 font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
                        {currency} { price }
                    </h1>
                    <button className="px-5 py-4 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>

    )
}

export default Card