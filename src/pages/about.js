import React from 'react'

const About = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-30 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/about_image.jpg)`}}></div>
            <div className='text-blue-600 absolute top-0 w-full  flex flex-col mt-24 items-center'>
                <h1 className='text-2xl md:text-4xl font-bold text-center'> Who we are | Human Resource Management </h1> 
                <h1 className='mt-6 text-xl font-semibold'> Our Culture</h1>
            </div>
        </div>

        <div className='flex flex-col items-center px-8 my-16'>
            <div className='text-md mt-16 w-10/12 leading-8'>
                <p>
                    We are a business strategy, human capital development outfit focused in performing HR strategy interventions that ensure that our client's human capital serves the best interests of the company. By creating and developing human resources models specific to the organizations that hire them. At FranChild, our business partners and HR consultants work to ensure that our clients are effectively using their personnel to achieve its stated goals, while also ensuring the workforce is operating at a high level of productivity and efficiency.

                    <span className='block mt-6 mb-2 text-xl font-semibold'>
                        We advise our clients on:
                    </span>

                    The administration of human resources policies and procedures. We serve as internal consultants by analyzing a company’s current HR programs and recommending solutions where applicable. More so, we develo, revise and implement HR policies and procedures for our clients ensuring HR programs and services are in compliance with established policies and procedures and state/federal laws and regulations.
                    We partner with our clients in preparing and maintaining reports related to specific HR projects and assist them with the development and coordination of recommended changes regarding workflow.

                    At FranChild, we develop methods for compiling and analyzing data for reports and special projects for clients and conduct audits of HR activities to ensure compliance.

                    We are also keen about our client's organizational performance and realizing that the core in achieving this will be high individual employee performance accumulated. Therefore, we are keen to improve our client's market share through provision of high end value to its people and present training sessions related to specific HR programs that meet specific skills gap.
                </p>
            </div>

            <div className='h-60 w-10/12 mt-20 rounded-lg shadow-2xl bg-cover pl-8 pt-12 md:bg-center lg:pl-16 lg:pt-16' style={{backgroundImage:`url(./images/call_image.jpg)`}}>
                <p className='text-blue-600 text-2xl md:text-3xl font-semibold' >Looking for expert HR support</p>
                <button className='px-4 py-2 mt-3 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                    <a href="mailto:franchild@gmail.com">Contact Us</a>
                </button>
            </div>
        </div>
        </>
    )
}

export default About
