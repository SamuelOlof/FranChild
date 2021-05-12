import React from 'react';


const Hero = () => {
    return (
        <div className='flex justify-center h-screen items-center mt-16 sm:mt-20 lg:mt-0'>
            <div className='w-10/12 px-8 pt-4 sm:pt-0 flex flex-col md:items-center md:space-y-5 lg:flex-row lg:justify-between '>
                <div className='md:w-4/5 lg:w-2/5 mb-14 lg:mb-0'>
                    <h1 className='text-3xl lg:text-4xl text-blue-600 font-semibold mb-4'>Your Partner for Growth</h1>
                    <p className='leading-loose text-gray-500 mb-4'>We take away the HR headaches so you can focus on serving clients and growing your business.</p>
                    
                    <button className='px-4 py-2 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                        <a href="mailto:info@franchild.com">Contact Us</a>
                    </button>
                </div>

                {/* hero image */}
                <div className='' 
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                >
                    <img className='md:w-92 md:h-80' src='./images/g1.jpg' alt="hero image"/>
                </div>
            </div>
        </div>

        
    )
}

export default Hero
