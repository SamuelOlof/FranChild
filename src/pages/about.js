import React from 'react'



const about = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-60 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/about_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-24 items-center'>
                <h1 className='text-2xl md:text-4xl font-bold text-center'> Who we are | People Development Company </h1> 
                <h1 className='mt-6 text-xl font-semibold'> Our Culture</h1>
            </div>
        </div>

        <div className='flex flex-col items-center px-4 my-16' >
            <div className='text-md mt-16 w-11/12 sm:w-10/12 leading-8 text-gray-700'>
                <p className='mt-4'>
                    We are a Human capital development outfit focused on providing business strategy and HR strategy interventions that ensure that our client's people resource provides the best service to our clients.
                </p>

                <p className='mt-4'>
                    At Talent Code Consulting our Business Partners work to ensure that our clients function optimally through their people resource to achieve business objectives while ensuring a happier and healthier workforce that understand the KPIs of Organizational performance. 
                </p> 

                <p className='block mt-6 mb-2 text-xl blue-text font-semibold'>
                    We advise our clients on:
                </p>

                <p className='mt-4'>
                    The administration of human resources policies and procedures. We serve as internal consultants by analyzing a company’s current HR programs and recommending solutions where applicable. More so, we develop, revise and implement HR policies and procedures for our clients ensuring HR programs and services are in compliance with established policies and procedures and state/federal laws and regulations. 
                </p>

                <p className='mt-4'>
                    We partner with our clients in preparing and maintaining reports related to specific HR projects and assist them with the development and coordination of recommended changes regarding workflow. 
                </p>

                <p className='mt-4'>
                    At  Talent Code Consulting, we develop methods for compiling and analyzing data for reports and special projects for clients and conduct audits of HR activities to ensure compliance. 
                </p>

                <p className='mt-4'>
                    We are also keen about our client's organizational performance and realizing that the core in achieving this will be high individual employee performance accumulated. Therefore, we are keen to improve our client's market share through provision of high end value to its people and present training sessions related to specific HR programs that meet specific skills gap. 
                </p>
            </div>

            <div className='h-60 w-11/12 sm:w-10/12 mt-20 rounded-lg shadow-2xl bg-cover pl-8 pt-12 md:bg-center lg:pl-16 lg:pt-16' style={{backgroundImage:`url(./images/call_image.jpg)`}}>
                <p className='blue-text text-2xl md:text-3xl font-semibold' >Looking for expert HR support</p>
                <button className='px-4 py-2 mt-3 bg-blue-900 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                    <a href="mailto:info@talentcode.com">Contact Us</a>
                </button>
            </div>
        </div>
        </>
    )
}

export default about
