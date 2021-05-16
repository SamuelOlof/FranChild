import React from 'react'

const advisory = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-70 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/training_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> HR and Business Advisory</h1> 
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='w-11/12 sm:w-10/12 px-4 py-10 leading-6'>
                <p className='mt-4 text-xl'>
                    Getting the most out of your people isn’t always easy, and right now it’s even harder than usual.
                </p>

                <p className='mt-4'>
                    We work on the basis that mid-tier firms want access to brilliant HR Consultants. And in this time of uncertainty and change this is more valuable than ever.
                </p>

                <p className='mt-4'>
                    Rather than a reactive, operational service, ambitious businesses look for a proactive service that will not only quickly solve your people puzzles, but find a way for the business to be more effective and perform better in the future.
                </p>

                <p className='mt-4'>
                    Right now we are at the end of a phone line, or more likely video call. But in the future we can also be on-site in the workplace with you on a regular basis.
                </p>

                <p className='mt-4'>
                    Our HR Consultants are not your average joes. Our team have been hand-picked: we select one People Director from 100 applicants in the UK to ensure you get a friendly, values-driven, commercially astute HR Director who can help to transform your business and drive it forward.
                </p>


                <p className='mt-4'>
                    Whether you already have an HR team in place or are starting to explore for the first time, we work with growing companies that want to be better next year than they are today.
                </p>


                <p className='mt-4'>
                    We believe HR consulting services should be a partnership: we work with you to understand your business goals, develop a strategic People Plan, then get on and deliver it so you can grow quicker and easier.
                </p>

                <p className='mt-4'>
                    To get the ball rolling contact our team today.
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

export default advisory
