import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';

const Contact = () => {
    return (
        <>
            <MapContainer className='h-56 md:h-80 w-full mt-16' style={{zIndex:-1}} center={[6.431700, 3.508700]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={[6.431700, 3.508700]}>
                        <Popup>
                            FranChild Ltd.
                        </Popup>
                    </Marker>
            </MapContainer>

            <div className='flex justify-center w-full'>
                <div className='w-11/12 sm:w-10/12 px-8 leading-8 text-center'>
                    <div className='my-8 md:my-20'>
                        <p>
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>  
                            <span className='ml-2'>+7(900)2932166</span>
                        </p>

                        <p>
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                             <a href="mailto:info@franchild.com"> <span className='ml-2'>info@franchild.com</span></a>
                        </p>

                        <p>
                            <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>  
                            <span className='ml-2'>Alpha beach road, Lekki, Lagos</span>
                        </p>

                        <div className='mt-2 '>
                            <a href="http://twitter.com">
                                <IoLogoTwitter className='mr-4 inline-block'/>
                            </a>

                            <a href="http://instagram.com">
                                <IoLogoInstagram className='mr-4 inline-block'/>
                            </a>

                            <a href="http://facebook.com" >
                                <IoLogoFacebook className='mr-4 inline-block'/>
                            </a>
                        </div>
                    </div>

                    <div className='text-center rounded shadow-2xl mt-8 mb-20 px-4 py-10'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <p className='text-lg font-semibold text-blue-600'>We are here ready to help you. Contact us today so we can help elevate your companies growth.</p>

                        <button className='mt-12 px-4 py-2 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none animate-bounce' style={{zIndex:-1}} type="submit" >
                            <a href="mailto:info@franchild.com">Contact Us</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
