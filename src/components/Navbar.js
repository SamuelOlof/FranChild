import React, {useState} from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const toggle = () => {
        setIsClick(!isClick);
    };

    const onMouseEnter = () => {
        if (window.innerWidth < 768){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 768){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };
    

    return (
        
        <nav className='shadow-sm flex justify-center bg-white fixed inset-x-0 top-0'>
            <div className='w-11/12 sm:w-10/12 flex justify-between h-16 items-center '>
                {/* Logo */}
                <div>
                    <img className="h-44 mt-3" src='./images/logo-02.svg' alt="Talentcode logo" />
                </div>

                {/* hamburger */}
                <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                    {!isClick ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    ) : (
                        <>
                        <div className='absolute top-0 pt-5 right-0 flex flex-col text-center  bg-black opacity-85 text-white w-full h-screen sm:w-1/2  '>
                            <div className='flex justify-end mr-16 mb-16'>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </div>

                            <a className='hover:text-blue-600 mb-16 transition duration-500 ease-in-out' href='/'>
                                Home
                            </a>
            
                            <a  className='hover:text-blue-600 mb-16 transition duration-500 ease-in-out' href='/about'>
                                About Us
                            </a>
            
                            <a className='hover:text-blue-600 mb-16 transition duration-500 ease-in-out' href='/services'>
                                    Our Services
                            </a>
            
                            <a className='hover:text-blue-600 mb-16 transition duration-500 ease-in-out' href='/contact'>
                                Contact Us
                            </a>
                        </div>
                        </>
                    )
                    }
                    
                </div>

                {/* nav items */}
                <div className="pr-4 md:block hidden text-gray-500">
                    <a className='p-4 hover:text-blue-600' href='/'>
                        Home
                    </a>

                    <a className='p-4 hover:text-blue-600' href='/about'>
                        About Us
                    </a>

                    <div className='inline-block'>
                        <a className='p-4 hover:text-blue-600' href='/services'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            Our services
                        </a>
                        {dropdown && <Dropdown/>}
                    </div>

                    <a className='p-4 hover:text-blue-600' href='/contact'>
                        Contact Us
                    </a>

                </div>
            </div>
         
            
        </nav>
        
    )
}

export default Navbar
