import React,{useState} from 'react';
import dataServicesPage from '../dataServicesPage';

const Services = () => {
    const [items] = useState(dataServicesPage)

    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-70 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/services_image.jpg)`}}></div>
            <div className='text-blue-600 absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Our Services</h1> 
            </div>
        </div>

        <div className='flex flex-col items-center my-20'>
            <div className='w-10/12 px-8 mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima ea illum cumque reprehenderit recusandae quas dignissimos doloremque, praesentium laudantium corporis deleniti voluptas asperiores odit a mollitia dolorem laboriosam quibusdam.
            </div>
            {items.map((item) => {
                const { id, aos, duration, easing, title, desc, path} = item
                return(
                <div key={id} className='w-10/12 pl-8 border-t-2 mt-16'
                    data-aos={aos}
                    data-aos-duration={duration}
                    data-aos-easing={easing}
                >
                    <h1 className='text-xl sm:text-3xl text-blue-600 font-semibold pt-4'>{title}</h1>
                    <p className='text-gray-500'>{desc}</p>
                    <button className='px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition focus:outline-none' type="submit">
                        <a href={path} target='_blank'>
                            Learn more...
                        </a>
                    </button>
                </div>
                )
            })}

            <div className='h-60 w-10/12 mt-20 rounded-lg shadow-2xl bg-cover pl-8 pt-12 md:bg-center lg:pl-16 lg:pt-16' style={{backgroundImage:`url(./images/call_image.jpg)`}}>
                <p className='text-blue-600 text-2xl md:text-3xl font-semibold' >Looking for expert HR support</p>
                <button className='px-4 py-2 mt-3 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                    <a href="mailto:info@franchild.com">Contact Us</a>
                </button>
            </div>
        </div>
        </>
    )
}

export default Services
