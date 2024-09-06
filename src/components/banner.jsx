import React from 'react'

const Banner = ({id, image, title, desc}) => {
    return (
        <div className='flex items-center justify-center gap-8 mx-20 min-w-[480px] bg-[#F9F9F9] mb-32'>
            <div className='w-2/5'>
                <img src={image} alt="girl-image"  />
            </div>
            <div className='w-3/5 max-w-[500px]'>
                <h2 className='capitalize text-4xl font-bold'>
                    {title}
                </h2>
                <p className='my-6 text-gray-500'>
                    {desc}
                </p>
                <button className='bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 '>Explore More</button>
            </div>
        </div>
    )
}

export default Banner