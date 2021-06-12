import React from 'react'

const outsourcing = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-50 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/outsourcing_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Outsourcing</h1> 
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='w-11/12 sm:w-10/12 px-4 py-10 leading-6 text-gray-700'>
                <h1 className='mt-4 text-lg'>
                    Let us lend our HR expertise to your employment projects. We’ll remove the guesswork and free up your staff to focus on core business, while you enjoy the peace of mind that comes from knowing your projects follow HR best practice and are aligned with relevant employment laws.
                </h1>
                <div className='mt-6'>
                    <h1 className='blue-text text-2xl'>You get exactly what you need.</h1>
                    <p className='mt-2'>
                        Whether you need ongoing HR support, assistance with a specific project or issue, or strategic insight on how to make the most of your human capital investments, Talent Code Consulting is well-suited to provide exactly what you need without any hidden fees or retainers.
                    </p>
                </div>

                <div className='mt-6'>
                    <h1 className='blue-text text-2xl'>We take the time to understand your business.</h1>
                    <p className='mt-2'>
                        Talent Code Consulting approaches each project with the success of your business in mind. We offer a personalized HR experience heavily focused on your culture and business strategy. We strive to satisfy your HR needs in a way that contributes to the current objectives of your organization.
                    </p>
                </div>

                <div className='mt-6'>
                    <h1 className='blue-text text-2xl'>We begin with the end in mind.</h1>
                    <p className='mt-2'>
                        Talent Code Consulting takes a results-based approach to the delivery of HR services. HR Consulting efforts are framed by key objectives along with the steps, resources, and expertise required to achieve those outcomes. Project scope, complexity, and client preferences are expertly navigated through management of schedules, deliverables, and status updates.
                    </p>
                </div>

                <div className='mt-6'>
                    <h1 className='blue-text text-2xl'>We provide professional, easy-to-understand communications.</h1>
                    <p className='mt-2'>
                        Talent Code Consulting communications are designed to be easily understood and leveraged by the target audience—whether an offer letter for a new employee or findings and recommendations report for top leadership. Regardless of the project, Talent Code Consulting realizes that providing an “answer” or submitting a report is not always sufficient. Equipping the employer to implement or message that information can be equally as important..
                    </p>
                </div>
                

                <div className='h-60 mt-20 rounded-lg shadow-2xl bg-cover pl-8 pt-12 md:bg-center lg:pl-16 lg:pt-16' style={{backgroundImage:`url(./images/call_image.jpg)`}}>
                    <p className='blue-text text-2xl md:text-3xl font-semibold' >Looking for expert HR support</p>
                    <button className='px-4 py-2 mt-3 bg-blue-900 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">
                        <a href="mailto:info@talentcode.com">Contact Us</a>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default outsourcing
