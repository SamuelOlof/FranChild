import React from 'react'

const evaluation = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-70 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/training_image.jpg)`}}></div>
            <div className='text-blue-600 absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Staff Evaluation</h1> 
            </div>
        </div>
        </>
    )
}

export default evaluation
