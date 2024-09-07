import React from 'react'

const Pricing = () => {
    return (
        <div className='bg-slate-100 mx-20 py-24 px-32 text-center rounded-md my-32'>
            <div>
                <h2 className='font-bold text-4xl'>Get 20% Discount On Your First Order,<br /> Are You Ready To Buy</h2>
                <p className='py-10 text-md'>We will make sure you get the right and the best quality products for your workout</p>
                <div className='flex gap-5 items-center justify-center'>
                    <button className='bg-orange-500 text-white font-bold h-10 px-6 py-2 rounded-md hover:bg-orange-600' >Learn More</button>
                    <button className='border-orange-500 border-2 font-bold text-orange-700 h-10 px-5 py-1 rounded-md hover:bg-orange-300 hover:text-white'>Stay In Touch</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing