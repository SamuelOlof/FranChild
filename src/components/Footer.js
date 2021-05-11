import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-blue-900 flex flex-col items-center text-white md:text-left '>
            <div className='flex flex-col md:flex-row w-10/12 justify-between mt-16' >
                {/* company name */}
                <div className='w-52'>
                    <Link to='/' className='text-2xl font-bold tracking-widest'>
                        Fran<span className='text-blue-600'>Child</span>
                    </Link>
                    <p className='mt-2 mb-8'>Your Partner for Growth</p>
                </div>

                {/* list items */}
                <div className='w-52' >
                    <ul>
                        <li className='mb-3'>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>

                        <li className='mb-3'>
                            <Link to='/about'>
                                About Us
                            </Link>
                        </li>

                        <li className='mb-3'>
                            <Link to='/services'>
                                Our Services
                            </Link>
                        </li>

                        <li className='mb-3'>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* newsletter */}
                <div className='w-52 mt-8 md:mt-0' >
                    <h1 className='mb-3'>Email</h1>
                    <input className='px-2 py-1 rounded-md border-2 border-blue-600 bg-blue-900 block focus:outline-none' type="email" name="mail" placeholder='your email here' />
                    <button className='mt-3 px-6 py-1 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">Subscribe</button>
                </div>
            </div>

            {/* contact section */}
            <div className='flex flex-col md:flex-row w-10/12 justify-between mt-8 mb-16'>
                <div className='w-52'>
                    <h1>Contact</h1>
                    <p>Email- <a href="mailto:info@franchild.com"> info@franchild.com</a>
                    </p>
                </div>

                <div className='w-52 mt-0 md:mt-6'>
                    +7(900)2932166
                </div>

                <div className='w-52 mt-0 md:mt-6'>
                    Alpha beach road, Lekki, Lagos.
                </div>
            </div>
        </div>
    )
}

export default Footer
