import React from 'react';


const Different = () => {
    return (
        <div className='flex flex-col items-center my-24'>
            <h1 className='mb-2 text-xl md:text-3xl text-blue-600 font-bold text-center w-10/12'>What's different about FranChild</h1>
            <hr className='border-2 border-dotted border-gray-200 w-7/12 mb-20' />

            <div className='w-10/12 flex flex-col md:flex-row justify-around items-center'>
                <div className='w-20 flex flex-col items-center mb-12 md:mb-6'>
                     <img className='h-16' src="./images/Proactive.png" alt="Proactive" />
                     <h1 className='text-3xl font-bold text-blue-600 mt-2'>Proactive</h1>
                </div>

                <div className='w-20 flex flex-col items-center mb-12 md:mb-6'>
                    <img className='h-16' src="./images/Strategic.png" alt="Strategic" />
                    <h1 className='text-3xl font-bold text-blue-600 mt-2'>Strategic</h1>
                </div>
                <div className='w-20 flex flex-col items-center mb-12 md:mb-6'>
                    <img className='h-16' src="./images/Adaptable.png" alt="Adaptable" />
                    <h1 className='text-3xl font-bold text-blue-600 mt-2'>Adaptable</h1>
                </div>
                
                <div className='w-20 flex flex-col items-center mb-12 md:mb-6'>
                    <img className='h-16' src="./images/Innovative.png" alt="Innovative" />
                    <h1 className='text-3xl font-bold text-blue-600 mt-2'>Innovative</h1>
                </div>
            </div>

            <button className='mt-20 px-4 py-2 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none animate-bounce' type="submit">
                <a href="mailto:franchild@gmail.com">Contact Us</a>
            </button>
        </div>
    )
}

export default Different
