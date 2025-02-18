import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaUserCircle, FaRupeeSign, FaSignOutAlt, FaExchangeAlt, FaEye, FaEnvelope, FaSignInAlt} from "react-icons/fa";
import { FaBars, FaTimes, FaHome, FaChevronDown, FaUser, FaHistory, FaUserPlus, FaInfoCircle} from "react-icons/fa";

const LandingNavbar = () => {
    // State hooks to manage the visibility of dropdown menus and the mobile menu
    const [isOpen, setIsOpen] = useState(false);
    const [accountLists, setAccountLists] = useState(false);
    const [userLists, setUserLists] = useState(false);
    const [transactionLists, setTransactionLists] = useState(false);

    // Toggle the mobile menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Style variables for consistent styling across links and icons
    const linkStyle = "flex items-center text-lg justify-center space-x-1 font-bold transition duration-300 hover:scale-110 active:scale-90";
    const linkStyleM = "flex items-center space-x-1 text-lg font-bold";

    return (
        <nav className="bg-[#A5BFCC]/50 backdrop-blur-lg p-2 fixed w-full z-[100] rounded-b-xl shadow-2xl">
            <div className="container mx-auto flex justify-between items-center px-2">
                {/* Logo */}
                <Link to="/" className="ubuntu-regular space-x-2 flex justify-center items-center soft-shadow-text text-5xl font-extrabold text-[#4C585B] hover:scale-110 transition duration-300">
                    Fin 
                    <img src="/favicon.png" alt="App Icon" width="50" height="50" />
                    Trust
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-10">
                    <Link to="/signin" className={linkStyle}>
                        <FaSignInAlt />
                        <p>Sign In</p>
                    </Link>
                    <Link to="/newAccount" className={linkStyle}>
                        <FaUserPlus />
                        <p>Sign Up</p>
                    </Link>
                    <Link className={linkStyle}>
                        <FaInfoCircle />
                        <p>About Us</p>
                    </Link>
                    <Link className={linkStyle}>
                        <FaEnvelope />
                        <p>Contact Us</p>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    {(!isOpen) &&
                    <button onClick={toggleMenu} className="text-[#4C585B] scale-125 hover:scale-150 focus:outline-none transition duration-300 active:scale-100">
                        <FaBars />
                    </button>
                    }
                    {(isOpen) &&
                    <button onClick={toggleMenu} className="text-[#4C585B] scale-125 hover:scale-150 focus:outline-none transition duration-300 active:scale-100">
                        <FaTimes />
                    </button>
                    }
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden grid gap-5 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-full opacity-100 pt-10' : 'max-h-0 opacity-0'}`}>
                <Link to="/signin" className={linkStyleM}>
                    <FaSignInAlt />
                    <p>Sign In</p>
                </Link>
                <Link to="/newAccount" className={linkStyleM}>
                    <FaUserPlus />
                    <p>Sign Up</p>
                </Link>
                <Link className={linkStyleM}>
                    <FaInfoCircle />
                    <p>About Us</p>
                </Link>
                <Link className={linkStyleM}>
                    <FaEnvelope />
                    <p>Contact Us</p>
                </Link>
            </div>
        </nav>
    );
};
export default LandingNavbar;