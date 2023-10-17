import { useState } from "react";
import web32 from "../../assets/web32.png";
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleMenueClick = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="flex justify-around p-4 shadow-md ">
            <div className="flex items-center">
                <img className=" h-16 ml-auto" src={web32} alt="web32 img" />
                <span className=" font-body text-3xl">Web3 Entirety</span>
            </div>
            {!toggle && <CiMenuBurger onClick={handleMenueClick} className='text-black text-2xl md:hidden block mt-4' />}
            {toggle && <AiOutlineClose onClick={handleMenueClick} className='text-black text-2xl md:hidden block mt-4' />}
            <ul className="hidden  md:flex gap-7 mt-3  ">
                <li className="hover:text-lg cursor-pointer  inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Home
                </li>
                <li className="hover:text-lg cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    About
                </li>
                <li className="hover:text-lg cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Community
                </li>
                <li className="hover:text-lg cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Team
                </li>
                <li className="hover:text-lg cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Contact Us
                </li>
            </ul>

            <ul className={` duration-300 h-screen md:hidden gap-7 flex flex-col fixed bg-black left-0 top-[98px] w-full ${toggle ? 'left-0' : 'left-[-100%]'} `}>
                <li className=" p-2 cursor-pointer  inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Home
                </li>
                <li className=" p-2 cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    About
                </li>
                <li className=" p-2 cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Community
                </li>
                <li className=" p-2 cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Team
                </li>
                <li className=" p-2 cursor-pointer inline-block font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                    Contact Us
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
