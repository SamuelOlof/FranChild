import React from 'react'

const evaluation = () => {
    return (
        <>
        <div className='relative ' style={{zIndex:-1}}>
            <div className='h-72 md:h-80  mt-16 opacity-70 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(./images/training_image.jpg)`}}></div>
            <div className='blue-text absolute top-0 w-full  flex flex-col mt-32 items-center'>
                <h1 className='text-2xl md:text-5xl font-bold text-center'> Staff Evaluation</h1> 
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='w-11/12 sm:w-10/12 px-4 py-10 leading-6'>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae ipsam autem. Eaque placeat dignissimos est praesentium officia veritatis nam, quibusdam enim corrupti labore alias expedita vel vitae, dolor facilis?
                </h1>
                <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae ipsam autem. Eaque placeat dignissimos est praesentium officia veritatis nam, quibusdam enim corrupti labore alias expedita vel vitae, dolor facilis?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis libero hic ea ratione dolore, corporis iure dicta numquam, saepe, omnis magnam voluptate tempora repellat illo. Praesentium veniam cupiditate corporis aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque tenetur, esse ut in provident, a sunt quas optio ad obcaecati quae laborum debitis, excepturi laboriosam quibusdam magni incidunt ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates incidunt perferendis, dignissimos nostrum eaque voluptas non cumque iusto doloremque consequuntur aspernatur expedita quisquam maiores nulla laudantium quasi voluptatum excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse accusamus nam voluptatem aliquid magnam impedit facilis nostrum veniam. Sed modi doloremque enim voluptate quas asperiores aliquid quis ab eius. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus totam aliquam laboriosam dolores temporibus quibusdam incidunt ut earum nobis vel beatae odit rerum nam praesentium error eveniet sequi, commodi dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus totam, fugit quisquam suscipit doloribus accusantium architecto nesciunt ipsum corrupti laudantium illo error quidem hic itaque quia aliquid doloremque iste.
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

export default evaluation
