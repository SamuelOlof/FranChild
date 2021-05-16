import React from 'react'

const evaluation = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-70 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/evaluation_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Staff Evaluation</h1> 
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='w-11/12 sm:w-10/12 px-4 py-10 leading-6 text-gray-700'>
                <p className='mt-4'>
                    Any organization needs a plan of action to reach its goals. The best way to meet these expectations is through the assessment of the strengths and weaknesses of teams and individuals alike.
                </p>

                <p className='mt-4'>
                    So, employees must know the level at which they are performing based on the assessment of their supervisors and peers. This enables them to understand the overall contributions of their job role to the company.
                </p>

                <p className='mt-4'>
                    Through regular evaluation and feedback, workers in your organization have the chance to stay on board with the plans that you make, while taking the initiative to perform better.
                </p>

                <p className='mt-4'>
                    From the evaluator's perspective, such work performance evaluations help in making HR decisions.
                </p>

                <h1 className='mt-4 blue-text text-2xl'>
                    Advantages of Employee Performance Reviews
                </h1>

                <p className='mt-4'>
                    HR managers might believe that the performance evaluation process is a waste of time. However, it can have many advantages for workers and employers alike. Here are the benefits of this process.
                </p>

                <ul className='mt-4'>
                        <li>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>The HR team can understand the areas that require training and development. They can address concerns and factors that are hindering progress in the workplace.</p>
                            </div>
                        </li>

                        <li className='mt-4'>
                             <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Individuals can track their organizational goals and devise workable action plans to reach their best work potential.</p>
                             </div>
                        </li>

                        <li className='mt-4'>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Workers can strengthen their skills, work on the weaknesses and advance their careers by gaining knowledge of their competencies.</p>
                            </div>
                        </li>

                        <li className='mt-4'>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Teams, be it remote or in-person, can have discussions and meetings in order to improve productivity and offer insights on goals that need attention</p>
                            </div>
                        </li>

                        <li className='mt-4'>
                            <div className='flex'>
                                <svg className="w-6 h-6 inline-block fill-current blue-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <p>Peer reviews can help in improving communication skills, have frequent conversations, and develop a stronger company culture.</p>
                            </div>
                        </li>
                    </ul>

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

export default evaluation
