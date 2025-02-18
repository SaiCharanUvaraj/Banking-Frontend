import React from 'react'
import BankInfo from '../components/BankInfo'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaRupeeSign } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import user from '../Data/user.json';

const Transaction = () => {
    const inputBoxStyle = "rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold";
    const buttonStyle= "rounded-lg bg-[#4C585B] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2";
    return (
    <div>
        <Navbar />
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen gap-5">
            <div className='grid place-items-center pt-10'>
                <BankInfo />
                <Link to="/home" className={buttonStyle}><FaArrowLeft /></Link>
            </div>
            <div className="flex flex-col justify-center items-center py-10 px-2">
                <form className="bg-[#7E99A3] rounded-xl sm:w-4/5 w-full">
                    <center>
                        <p className="bg-[#4C585B] rounded-t-xl text-white p-3 text-center font-bold text-xl md:text-3xl shadow-lg shadow-black">
                        Transfer Your Money Securely with Us
                        </p>
                        <div className="my-4 pt-10">
                            <select name="acc" className={inputBoxStyle}>
                                <option value="" disabled selected>Select any of your Account</option>
                                {user.accounts.map((item,index)=>(
                                <option key={index} value={item.no}>Account No {item.no}</option>
                                ))};
                            </select>
                        </div>
                        <div className="my-4">
                            <input type="number" name="pwd" className={inputBoxStyle} placeholder='Destination Account No' />
                        </div>
                        <div className="my-4">
                            <input type="password" name="pwd" className={inputBoxStyle} placeholder='Account Password' />
                        </div>
                        <div className="my-4">
                            <input type="number" name="pwd" className="rounded-lg mt-2 w-4/6 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold" placeholder='Amount in Rupees' />
                        </div>
                        <div className="my-4">
                            <input type="text" name="desc" className={inputBoxStyle} placeholder='Description' />
                        </div>
                        <div className='py-5'>
                            <button className={buttonStyle} onClick={(e)=>e.preventDefault()}>
                                Transfer
                            </button>
                        </div>
                    </center>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Transaction