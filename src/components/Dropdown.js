import React, { useState } from 'react';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';

const Dropdown = ({toggle}) => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(true)
    return (
        <div onClick={toggle} className={click ? 'grid grid-rows-5 text-center items-center bg-blue-300 mt-16' :'hidden' }>
            {MenuItems.map((item, index) => {
                return(
                    <div key={index} className='pt-2'>
                        <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                            {item.title}
                        </Link>
                    </div>
                )
            })

            }

        </div>
        // <div className={
        //     isClick ? 'grid grid-rows-5 text-center items-center bg-blue-300 mt-16' : 'hidden'
        //     }
        //     onClick={toggle}
        // >
        //         <Link className='p-4 hover:text-blue-600' to='/training'>
        //             Training and Development
        //         </Link>

        //         <Link className='p-4 hover:text-blue-600' to='/search'>
        //             Search and Placement
        //         </Link>

        //         <Link className='p-4 hover:text-blue-600' to='/evaluation'>
        //              Staff Evaluation
        //         </Link>

        //         <Link className='p-4 hover:text-blue-600' to='/outsourcing'>
        //             Outsourcing
        //         </Link>

        //         <Link className='p-4 hover:text-blue-600' to='/advisory'>
        //             HR and Business Advisory
        //         </Link>
        // </div>
    )
}

export default Dropdown
