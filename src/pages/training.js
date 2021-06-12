import React from 'react'

const training = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-50 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/training_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl sm:text-5xl font-bold text-center'> Training and Development</h1> 
                <p className='text-sm sm:text-xl font-semibold   text-center mt-4 text-white'> For your team to be better at their jobs</p> 
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='w-11/12 sm:w-10/12 px-4 py-10 leading-6 text-gray-700'>
                <h1 className='text-lg blue-text'>
                    Imagine this: every employee not only knows exactly what is expected of them and are fully competent in every area of their job role, but they are well-trained to do the right thing every time and have fantastic people skills.
                </h1>

                <p className='mt-4'>
                    For most ambitious businesses, people need to learn new practical skills and develop their commercial and people skills every year. This is not limited to the junior staff, but should include everyone, right up to the senior leaders.
                </p>

                <p className='mt-4'>
                    A good training and development program will identify training needs for employees to help them perform better within their roles. In turn, this leads to better performance across the business, increases staff engagement and boosts motivation so that they are more likely to give their best in your business.
                </p>

                <p className='mt-4'>
                    Our study from 2500 firms suggested that companies with comprehensive training have a 218% higher income per employee than those with less, and enjoy a 24% higher profit margin than those who spend less on training.
                </p>

                <p className='mt-4'>
                    With such a significant increase in business performance, investing in training is a no-brainer!
                </p>

                <p className='mt-4'>
                    Employee development starts on day one with a good induction process, but it can’t stop there. Whether it’s broadening general skills, preparing ambitious employees for management, or deepening expertise in their field; having a plan in place will help them to learn and grow within your business and work to the best of their ability.
                </p>

                <p className='mt-4'>
                    It can be tricky getting to grips with exercises such as skills matrices, competency frameworks and skills GAP analysis – all of which are key to improving employee performance. With our help, you can ensure the right training and development is provided, ensuring employees can progress within their specific roles to help drive business growth.
                </p>

                <div className='mt-10'>
                    <h1 className='mt-5 text-xl sm:text-2xl blue-text text-semibold'>Our Skills Development Process</h1>

                    <p className='mt-4'>
                        Our experience informs us that focusing on technical, leadership and people skills is a good approach to fostering learning development in the workplace.
                    </p>

                    <p className='mt-4'>
                        At Talent Code Consulting we have a suite of offerings for SMEs and mid-tier businesses, delivered by our experienced People Directors, that can be personalised to your unique business and deliver the improvements that you need so you can reap the benefits. These include:
                    </p>

                    <ul className='mt-4 text-black'>
                        <li>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Employee training and development</p>
                            </div>
                        </li>

                        <li>
                             <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Employee training for teams</p>
                             </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Leadership training</p>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Corporate training</p>
                            </div>
                        </li>
                    </ul>

                    <p className='mt-4'>
                        We do this having understood your business and as part of your overall people plan, maximizing the impact of investing in training and development. <span className='text-black'><a href="mailto:info@talentcode.com">Contact Us</a></span> to find out how we can partner with you to develop your team.
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

export default training
