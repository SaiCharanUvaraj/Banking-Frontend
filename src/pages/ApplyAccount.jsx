import React from 'react'
import BankInfo from '../components/BankInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ApplyAccount = () => {
    const [pverify, setPverify] = useState(false);
    const [mverify, setMverify] = useState(false);
    const inputBoxStyle = "rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold";
    const buttonStyle= "rounded-lg bg-[#4C585B] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2";
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen gap-5">
            <div className='grid place-items-center'>
                <BankInfo />
                <Link to="/" className={buttonStyle}><FaArrowLeft /></Link>
            </div>
            <div className="flex flex-col justify-center items-center py-10 px-2">
                <form className="bg-[#7E99A3] rounded-xl sm:w-4/5 w-full">
                    <center>
                    <p className="bg-[#4C585B] rounded-t-xl text-white p-3 text-center font-bold text-xl md:text-3xl shadow-lg shadow-black">
                        Apply for a New Account
                    </p>
                    <div className="my-2 mt-5 flex justify-center items-center space-x-3">
                        <input type="text" name="name" placeholder="First Name" className="rounded-lg mt-2 w-2/5 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold"/>
                        <input type="text" name="name" placeholder="Last Name" className="rounded-lg mt-2 w-2/5 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold" />
                    </div>
                    <div className="my-4 grid gap-1">
                        {!pverify &&
                        <div>
                            <input type="number" name="phone" className={inputBoxStyle} placeholder='Valid Phone number' /><br />
                            <Link className="text-black hover:underline text-lg font-bold" onClick={()=>setPverify(!pverify)}>Verify</Link>
                        </div>}
                        {pverify &&
                        <div>
                            <input type="number" name="otp" className={inputBoxStyle} placeholder='Enter the OTP sent to your number' /><br />
                            <Link className="text-black hover:underline text-lg font-bold">Submit OTP</Link>
                        </div>
                        }
                    </div>
                    <div className="my-4">
                        <input type="number" name="pan" className={inputBoxStyle} placeholder='Valid PAN Card Number' />
                    </div>
                    <div className="my-4 grid gap-1">
                        {!mverify &&
                        <div>
                            <input type="email" name="email" className={inputBoxStyle} placeholder='Valid Email ID' /><br />
                            <Link className="text-black hover:underline text-lg font-bold" onClick={()=>setMverify(!mverify)}>Verify</Link>
                        </div>}
                        {mverify &&
                        <div>
                            <input type="number" name="otp" className={inputBoxStyle} placeholder='Enter the OTP sent to your mail id' /><br />
                            <Link className="text-black hover:underline text-lg font-bold">Submit OTP</Link>
                        </div>
                        }
                    </div>
                    <div className="my-4">
                        <input type="text" name="dob" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}  className={inputBoxStyle} placeholder='Date of Birth' />
                    </div>
                    <div className="my-4">
                        <textarea name="pan" className="rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-32 transition-all duration-300 text-center p-2 font-semibold" placeholder='Residential Address' />
                    </div>
                    <div className='my-6'>
                        <button className={buttonStyle} onClick={handleSubmit}>
                            Apply Now
                        </button>
                    </div>
                    </center>
                </form>
            </div>
        </div>
  )
}
export default ApplyAccount;

/*
darker: #4C585B
lighter: #7E99A3
more lighter: #A5BFCC
background: #F4EDD3
*/