import React, { useState } from 'react';
import { WiDirectionRight } from 'react-icons/wi';
import { IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle the menu open/close
    const closeMenu = () => setMenuOpen(false); // Close the menu

    return (
        <div className="sticky top-0 z-50 mx-auto sm:w-full md:w-full lg:w-full bg-base-100 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="logo">
                    <a href="#home">
                    <img
                        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]"
                        src="https://i.ibb.co/qMTjvY01/Screenshot-2025-02-28-152421.png"
                        alt="Logo"
                    />
                    </a>
                </div>

                {/* Menu for larger screens (Laptop/Desktop) */}
                <ul className="hidden lg:flex gap-12 text-xl lg:text-2xl">
                    <a href="#Bonuses"> <li className="font-bold font-oswald opacity-95 hover:opacity-100 cursor-pointer">FREE Bounces</li></a>
                    <a href="#About"><li className="font-oswald opacity-95 hover:opacity-100 cursor-pointer">About</li></a>
                    <a href="#card"><li className="font-oswald opacity-95 hover:opacity-100 cursor-pointer">Ingredients</li></a>
                    <a href="#faq"> <li className="font-oswald opacity-75 hover:opacity-100 cursor-pointer">FAQ</li></a>
                </ul>

                {/* "Order Now" Button for Desktop */}
                <button className="hidden lg:flex font-oswald items-center bg-gradient-to-r from-red-500 to-orange-400 text-xl border-2 p-3 gap-1 text-white font-bold h-[50px] hover:bg-gradient-to-r from-red-600 to-orange-500">
                    Order Now
                    <span className="flex items-center text-4xl">
                        <WiDirectionRight className="border-2 text-white rounded-full" />
                    </span>
                </button>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="lg:hidden flex items-center gap-3">
                    {/* "Order Now" Button for Mobile */}
                    <button
                        className="font-oswald flex items-center bg-gradient-to-r from-red-500 to-orange-400 text-sm sm:text-sm border-2 p-2 sm:p-2 gap-1 text-white font-bold h-[50px]"
                        onClick={toggleMenu}
                    >
                        Order Now
                        <span className="flex items-center text-xl">
                            <WiDirectionRight className="border-2 text-white rounded-full" />
                        </span>
                    </button>

                    {/* Hamburger Icon or Close Icon */}
                    <span className="text-3xl text-black cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? <IoMdClose /> : <FaBars />} {/* Toggle between Hamburger and Close Icon */}
                    </span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-base-100 shadow-xl p-5 z-50`}>
                <div className="flex justify-between">
                    {/* Close icon inside mobile menu */}
                    <IoMdClose className="text-3xl cursor-pointer" onClick={closeMenu} />
                </div>
                <ul className="flex text-xl flex-col gap-6 mt-5">
                    <a href="#Bonuses"> <li className="font-bold font-oswald opacity-95 hover:opacity-100 cursor-pointer">FREE Bounces</li></a>
                    <a href="#About"><li className="font-oswald opacity-95 hover:opacity-100 cursor-pointer">About</li></a>
                    <a href="#card"><li className="font-oswald opacity-95 hover:opacity-100 cursor-pointer">Ingredients</li></a>
                    <a href="#faq"> <li className="font-oswald opacity-75 hover:opacity-100 cursor-pointer">FAQ</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
