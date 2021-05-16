import React from 'react'

const search = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-50 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/training_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Search and Placement</h1> 
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='w-11/12 sm:w-10/12 px-4 py-10 leading-8 text-gray-700'>
                <p className='mt-4'>
                    FranChild’s HR advisory group has created a unique and customizable approach where our team will serve as your strategic talent acquisition business partner throughout the employee lifecycle̶ starting with the recruitment phase.
                </p>

                <p className='mt-4 text-2xl blue-text'>
                    How is our recruiting model different?
                </p>

                <ul className='mt-4'>
                        <li className='mt-4'>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>
                                    We will have a weekly on-site presence, meet with key stakeholders, learn about your unique needs and ensure our acquisition strategies align with your organization’s goals and future growth plans and strategies.
                                </p>
                            </div>
                        </li>

                        <li className='mt-4'>
                             <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>
                                    Our direct recruiting services will keep your talent pipeline full, for both current and future openings from entry level opportunities all the way up to very complex and strategic positions.
                                </p>
                             </div>
                        </li>

                        <li className='mt-4'>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>
                                    When we say we’re your recruiting arm we mean it! Our team will handle all recruiting events including college and career fairs.
                                </p>
                            </div>
                        </li>

                        <li className='mt-4'>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>
                                    Our team will track your applicants, review resumes and select qualified candidates that come from the internal company hiring portal or any third-party postings.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <p className='mt-4'>
                        When it comes to the future of your organization your employees are vital to your success. In an environment where top talent is hard to come by, finding the right hires for your organization can be tough. Our team is here to help you take on this challenge and find the right people to lead your organization towards a more successful future.
                    </p>

                <div className='h-60 mt-20 rounded-lg shadow-2xl bg-cover pl-8 pt-12 md:bg-center lg:pl-16 lg:pt-16' style={{backgroundImage:`url(./images/call_image.jpg)`}}>
                    <p className='blue-text text-2xl md:text-3xl font-semibold' >Looking for expert HR support</p>
                    <button className='px-4 py-2 mt-3 bg-blue-900 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                        <a href="mailto:info@franchild.com">Contact Us</a>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default search
