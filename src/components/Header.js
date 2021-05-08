import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({toggle}) => {
    return (
    
        <nav className=' shadow-sm flex justify-center bg-white fixed inset-x-0 top-0'>
            <div className='w-10/12 flex justify-between h-16 items-center '>
                {/* Company name */}
                <Link to='/' className='pl-8 text-2xl font-bold tracking-widest'>
                    Fran<span className='text-blue-600'>Child</span>
                </Link>

                {/* hamburger */}
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>

                {/* nav items */}
                <div className="pr-8 md:block hidden ">
                    <Link className='p-4 hover:text-blue-600' to='/'>
                        Home
                    </Link>

                    <Link className='p-4 hover:text-blue-600' to='/about'>
                        About Us
                    </Link>

                    <Link className='p-4 hover:text-blue-600' to='/services'>
                        Our Services
                    </Link>

                    <Link className='p-4 hover:text-blue-600' to='/contact'>
                        Contact Us
                    </Link>
                </div>
            </div>
         
            
        </nav>
        
    )
}

export default Header
