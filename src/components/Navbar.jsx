import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaUserCircle, FaRupeeSign, FaSignOutAlt, FaExchangeAlt, FaEye, FaEnvelope} from "react-icons/fa";
import { FaBars, FaTimes, FaHome, FaChevronDown, FaUser, FaHistory, FaUserPlus, FaInfoCircle} from "react-icons/fa";

const Navbar = () => {
    // State hooks to manage the visibility of dropdown menus and the mobile menu
    const [isOpen, setIsOpen] = useState(false);
    const [accountLists, setAccountLists] = useState(false);
    const [userLists, setUserLists] = useState(false);
    const [transactionLists, setTransactionLists] = useState(false);

    // Toggle the mobile menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle the visibility of the "Items" dropdown menu
    const toggleUserDropdown = () => {
        setUserLists(!userLists);
    };

    const toggleTransactionDropdown = () => {
        setTransactionLists(!transactionLists);
    };

    // Toggle the visibility of the "Account" dropdown menu
    const toggleAccountDropdown = () => {
        setAccountLists(!accountLists);
    };

    // Style variables for consistent styling across links and icons
    const linkStyle = "flex items-center text-lg justify-center space-x-1 font-bold transition duration-300 hover:scale-110 active:scale-90";
    const linkStyleM = "flex items-center space-x-1 text-lg font-bold";
    const dropdownStyle = 'absolute grid place-items-start gap-3 mt-7 bg-[#A5BFCC]/50 backdrop-blur-lg shadow-2xl rounded-lg text-black p-3 border';
    const dropdownStyleM = 'grid place-items-start gap-3 mt-2 bg-[#A5BFCC]/50 backdrop-blur-lg shadow-2xl rounded-lg text-black p-3';

    return (
        <nav className="bg-[#A5BFCC]/50 backdrop-blur-lg p-2 fixed w-full z-[100] rounded-b-xl shadow-2xl">
            <div className="container mx-auto flex justify-between items-center px-2">
                {/* Logo */}
                <Link to="/home" className="ubuntu-regular space-x-2 flex justify-center items-center soft-shadow-text text-5xl font-extrabold text-[#4C585B] hover:scale-110 transition duration-300">
                    Fin 
                    <img src="/favicon.png" alt="App Icon" width="50" height="50" />
                    Trust
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-10">
                    <Link to="/home" className={linkStyle}>
                    <FaHome />
                    <p>Home</p>
                    </Link>
                    <div>
                        <Link className={linkStyle} onClick={toggleAccountDropdown}>
                            <FaRupeeSign />
                            <p>Accounts</p>
                            <FaChevronDown />
                        </Link>
                        {accountLists &&
                            <div className={dropdownStyle}>
                                <Link to="/accounts" className={linkStyle}> 
                                    <FaEye />
                                    <p>View</p>
                                </Link>
                                <Link to="/applyAccount" className={linkStyle}>
                                    <FaUserPlus />
                                    <p>New Account</p>
                                </Link>
                            </div>
                        }
                    </div>
                    <div>
                        <Link className={linkStyle} onClick={toggleTransactionDropdown}>
                            <FaExchangeAlt />
                            <p>Transactions</p>
                            <FaChevronDown />
                        </Link>
                        {transactionLists &&
                            <div className={dropdownStyle}>
                                <Link className={linkStyle}>
                                <   FaExchangeAlt />
                                    <p>Send Money</p>
                                </Link>
                                <Link className={linkStyle}>
                                    <FaHistory />
                                    <p>History</p>
                                </Link>
                            </div>
                        }
                    </div>
                    <div>
                        <Link className={linkStyle} onClick={toggleUserDropdown}>
                            <FaUser />
                            <p>User</p>
                            <FaChevronDown />
                        </Link>
                        {/* Display dropdown if accountLists is true */}
                        {userLists &&
                            <div className={dropdownStyle}>
                                <Link className={linkStyle}>
                                    <FaCog />
                                    <p>Settings</p>
                                </Link>
                                <Link className={linkStyle}>
                                    <FaUserCircle />
                                    <p>Profile</p>
                                </Link>
                                <Link className={linkStyle}>
                                    <FaEnvelope />
                                    Contact Us
                                </Link>
                                <Link className={linkStyle}>
                                    <FaInfoCircle />
                                    About Us
                                </Link>
                                <Link to="/" className={linkStyle}>
                                    <FaSignOutAlt />
                                    <p>Log Out</p>
                                </Link>
                            </div>
                        }
                    </div>
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
                <Link to="/home" className={linkStyleM}>
                    <FaHome />
                    <p>Home</p>
                </Link>
                <div>
                    <Link className={linkStyleM} onClick={toggleAccountDropdown}>
                        <FaRupeeSign />
                        <p>Accounts</p>
                        <FaChevronDown />
                    </Link>
                    {accountLists &&
                        <div className={dropdownStyleM}>
                            <Link to="/accounts"className={linkStyleM}> 
                                <FaEye />
                                <p>View</p>
                            </Link>
                            <Link to="/applyAccount" className={linkStyleM}>
                                <FaUserPlus />
                                <p>New Account</p>
                            </Link>
                        </div>
                    }
                </div>
                <div>
                    <Link className={linkStyleM} onClick={toggleTransactionDropdown}>
                        <FaExchangeAlt />
                        <p>Transactions</p>
                        <FaChevronDown />
                    </Link>
                    {transactionLists &&
                        <div className={dropdownStyleM}>
                            <Link className={linkStyleM}>
                                <FaExchangeAlt />
                                <p>Send Money</p>
                            </Link>
                            <Link className={linkStyleM}>
                                <FaHistory />
                                <p>History</p>
                            </Link>
                        </div>
                    }
                </div>
                <div>
                    <Link className={linkStyleM} onClick={toggleUserDropdown}>
                        <FaUser />
                        <p>User</p>
                        <FaChevronDown />
                    </Link>
                    {userLists &&
                        <div className={dropdownStyleM}>
                            <Link className={linkStyleM}>
                                <FaCog />
                                <p>Settings</p>
                            </Link>
                            <Link className={linkStyleM}>
                                <FaUserCircle /> 
                                <p>Profile</p>
                            </Link>
                            <Link className={linkStyleM}>
                                <FaEnvelope />
                                Contact Us
                            </Link>
                            <Link className={linkStyleM}>
                                <FaInfoCircle />
                                About Us
                            </Link>
                            <Link to="/" className={linkStyleM}>
                                <FaSignOutAlt />
                                <p>Log Out</p>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

/*
darker: #4C585B
lighter: #7E99A3
more lighter: #A5BFCC
background: #F4EDD3
*/