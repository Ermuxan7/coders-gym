import React from 'react'
import { FaDumbbell, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot } from 'react-icons/fa6'

const Links = ['Home', 'About', 'Services', 'Login']
const CompanyLinks = ['OurServices', 'Contact', 'Privacy Policy']

const Footer = () => {
    return (
        <div className='bg-slate-900 text-white py-10 border-t-2 rounded-t-3xl'>
            <div className='px-24 flex items-center gap-10'>
                <div className='flex-1 mr-20'>
                    <a href="/" className="flex items-center gap-2 text-lg cursor-pointer xs:text-2xl">
                        <FaDumbbell className="text-3xl lg:text-4xl xl:text-4xl"/>
                        <h2 className="font-bold text-2xl tracking-wider">Coders <span className="text-orange-500 ">GYM</span></h2>
                    </a>
                    <p className='pt-4 pb-6 text-md w-[300px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.
                    </p>
                    <div className='flex items-center gap-5 text-2xl'> 
                        <FaLocationDot className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                        <FaFacebook className='cursor-pointer' />
                        <FaLinkedin className='cursor-pointer' />
                    </div>
                </div>
                <div className='flex-1 h-40'>
                    <h2 className='mb-4 text-xl font-bold'>Important Links</h2>
                    <ul className='flex flex-col gap-2'>
                        {Links.map(item =>(
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-1 h-40'>
                    <h2 className='mb-4 text-xl font-bold'>Company Links</h2>
                    <ul className='flex flex-col gap-2'>
                        {CompanyLinks.map(item =>(
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-1 h-40'>
                    <h2 className='mb-4 text-xl font-bold'>Resources</h2>
                    <ul className='flex flex-col gap-2'>
                        {Links.map(item =>(
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='px-20 pt-8'>
                <p className='h-0.5 w-full bg-gray-700'/>
                <p className='mt-6 text-gray-500 text-center'>@copyright 2024 The Coding Journey</p>
            </div>
        </div>
    )
}

export default Footer