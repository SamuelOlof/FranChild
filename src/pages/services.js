import React,{useState} from 'react';
import dataServicesPage from '../dataServicesPage';

const Services = () => {
    const [items] = useState(dataServicesPage)

    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-50 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/services_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Our Services</h1> 
            </div>
        </div>

        <div className='flex flex-col items-center my-20'>
            <div className='w-11/12 sm:w-10/12 px-4 mb-8 text-gray-700 leading-8'>
                <h1 className='mt-5 text-xl sm:text-2xl blue-text text-semibold'>Our priority at FranChild is to drive change and deliver growth for your business.</h1>

                <p className='mt-4'>
                    We do this by providing embedded, strategic HR support to solve your people issues.
                </p>

                <p className='mt-4'>
                    When you choose FranChild, one of our highly experienced, local People Directors will join your business on a flexible, part-time basis. They can work with you remotely or on-site depending on your need and they will get to know your business. More importantly, they get to know the people within it and deliver results.
                </p>

                <p className='mt-5 text-xl sm:text-2xl blue-text text-semibold'>Our HR services include:</p>
            </div>
            {items.map((item) => {
                const { id, aos, duration, easing, title, desc, path} = item
                return(
                <div key={id} className='w-11/12 sm:w-10/12 border-t-2 mt-10 px-4'
                    data-aos={aos}
                    data-aos-duration={duration}
                    data-aos-easing={easing}
                >
                    <h1 className='text-xl sm:text-3xl blue-text font-semibold pt-4'>{title}</h1>
                    <p className='text-gray-700 mt-2 leading-8'>{desc}</p>
                    <button className='px-4 py-2 mt-4 bg-blue-900 text-white rounded hover:bg-blue-700 transition focus:outline-none' type="submit">
                        <a href={path} target='_blank'>
                            Learn more...
                        </a>
                    </button>
                </div>
                )
            })}

            <div className='h-60 w-11/12 sm:w-10/12 mt-20 rounded-lg shadow-2xl bg-cover pl-8 pt-12 md:bg-center lg:pl-16 lg:pt-16' style={{backgroundImage:`url(./images/call_image.jpg)`}}>
                <p className='blue-text text-2xl md:text-3xl font-semibold' >Looking for expert HR support</p>
                <button className='px-4 py-2 mt-3 bg-blue-900 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                    <a href="mailto:info@franchild.com">Contact Us</a>
                </button>
            </div>
        </div>
        </>
    )
}

export default Services
