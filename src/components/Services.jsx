import React from 'react'
import {FaExchangeAlt, FaEye, FaUserPlus} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Services = () => {
    const buttonStyle= "rounded-lg bg-[#4C585B] hover:scale-110 active:scale-95 p-3 text-lg md:text-2xl font-semibold text-white transition-all duration-300 mb-2";
    return (
    <div className='p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            <div className='bg-[#7E99A3] text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl font-bold text-center'>View Your Account</p>
                <FaEye className='text-8xl text-[#F4EDD3]'/>
                <p className='text-lg font-semibold text-justify'>Easily monitor your balance, transactions, and account details from anywhere with FinTrust’s user-friendly dashboard.</p>
                <Link className={buttonStyle}>View</Link>
            </div>
            <div className='bg-[#7E99A3] text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl font-bold text-center'>Apply for a New Account</p>
                <FaUserPlus className='text-8xl text-[#F4EDD3]'/>
                <p className='text-lg font-semibold text-justify'>Start your banking journey with FinTrust in just a few clicks. Open a secure and flexible account tailored to your needs.</p>
                <Link to="/newAccount" className={buttonStyle}>Apply</Link>
            </div>
            <div className='bg-[#7E99A3] text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl font-bold text-center'>Transfer Money</p>
                <FaExchangeAlt className='text-8xl text-[#F4EDD3]'/>
                <p className='text-lg font-semibold text-justify'>Send and receive money instantly with secure encryption. Enjoy seamless transactions with zero stress!</p>
                <Link className={buttonStyle}>Transfer</Link>
            </div>
        </div>
    </div>
  )
}

export default Services