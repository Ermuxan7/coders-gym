import React from 'react'
import { RiMenFill } from 'react-icons/ri'
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";

const Offer = () => {
    return (
        <div className='m-32 flex items-center gap-20'>
            <div>
                <h3 className='font-bold text-4xl max-w-64 mb-4'>What we offer <br /> for you</h3>
                <p className='text-gray-500'>It is a long established fact that a <br /> reader readable.</p>
            </div>
            <div className='flex gap-6  '>
                <div className='p-6 bg-gray-200 rounded-md hover:bg-white hover:shadow-neutral-500 hover:shadow-lg'>
                    <MdOutlineSportsKabaddi className='text-3xl' />
                    <h4 className='my-2 font-bold text-xl '> Yoga Equipments</h4>
                    <p className='text-gray-500'>It is a long established fact that a <br /> reader readable.</p>
                </div>
                <div className='p-6 bg-gray-200 rounded-md hover:bg-white hover:shadow-neutral-500 hover:shadow-lg'>
                    <FaDumbbell className='text-3xl'/>
                    <h4 className='my-2 font-bold text-xl'>Muscle Equipments</h4>
                    <p className='text-gray-500'>It is a long established fact that a <br /> reader readable.</p>
                </div>
                <div className='p-6 bg-gray-200 rounded-md hover:bg-white hover:shadow-neutral-500 hover:shadow-lg'>
                    <GiGymBag className='text-3xl'/>
                    <h4 className='my-2 font-bold text-xl'>Fitness Equipments</h4>
                    <p className='text-gray-500'>It is a long established fact that a <br /> reader readable.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer