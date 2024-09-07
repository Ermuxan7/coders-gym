import { FaDumbbell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Slider from "./slider";
import { NavbarMenu } from "../../mockData/data";
// import { NavbarMenu } from "../../mockData/data";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <nav className="px-40">
            <div className="flex items-center justify-between px-10 py-5">
                {/* Logo Section */}
                <a href="/" className="flex items-center gap-2 text-lg cursor-pointer xs:text-2xl">
                    <FaDumbbell className="text-3xl lg:text-4xl xl:text-4xl"/>
                    <h2 className="font-bold tracking-wider">Coders <span className="text-orange-500 ">GYM</span></h2>
                </a>
                {/* Menu Section */}
                <ul className="hidden items-center gap-8 font-semibold text-base lg:flex">
                    {NavbarMenu.map((item, index) =>(
                        <li key={index} className="cursor-pointer hover:text-orange-500 hover:border-b-orange-300 hover:border-b-2">{item}</li>
                    ))}
                </ul>
                {/* login Section */}
                <div className="flex items-center gap-5 text-lg ">
                    <div className="p-3 text-xl rounded-full hover:text-white hover:bg-orange-400 duration-200"><FaSearch /></div>
                    <div className="p-3 text-xl rounded-full hover:text-white hover:bg-orange-400 duration-200"><FaShoppingCart/></div>
                    <button className="text-lg font-semibold px-5 py-2 border-2 rounded-lg text-orange-500  border-orange-500 hover:bg-orange-300 hover:text-white duration-300">
                        Login
                    </button>
                {/* Mobile Hamburger Menu Section */}
                <RiMenu3Line className="flex text-2xl hover:text-gray-400 lg:hidden" onClick={() => setOpen(!open)}/>

                </div>
            </div>
        </nav>

        {/* Menu Sidebar Section */}
        <Slider open={open}/>
        </>

    )
}

export default Navbar