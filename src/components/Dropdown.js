import React from 'react'
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={
                isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-300 mt-16' : 'hidden'
            }
            onClick='isOpen = !isOpen'>
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
    )
}

export default Dropdown
