import React from 'react'
import { RiPlayFill } from 'react-icons/ri'

const Main = () => {
    return (
        <div className='px-36 flex items-center gap-32 mt-12' >
            <div>
                <h2 className='font-bold text-6xl mt-40'>Gym Gives you the <br /> perfect <span className='text-orange-500'>Health</span></h2>
                <p className='text-gray-400 my-10'>
                    It is a long established fact that a reader will be by readable content of a  <br />page when are the best product.
                </p>
                <div className='flex items-center gap-4 '>
                    <button className='px-5 py-2 h-12 text-white bg-orange-500 hover:bg-orange-600 duration-75 rounded-lg'>Order Now</button>
                    <button className='flex items-center gap-1 px-3 py-2 h-12 border-orange-500 text-orange-500 font-bold rounded-lg border-2 hover:bg-orange-400 hover:text-white'><RiPlayFill/>Watch Now</button>
                </div>
            </div>
            <div>
                <img src="gantel.png" alt="gantel" />
            </div>
        </div>
    )
}

export default Main