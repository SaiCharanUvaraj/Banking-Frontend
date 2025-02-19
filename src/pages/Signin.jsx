import React from 'react'
import BankInfo from '../components/BankInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [forgot, setForgot] = useState(false);
  const inputBoxStyle = "rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold";
  const buttonStyle= "rounded-lg bg-[#4C585B] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2";
  const forgotPwd =() =>{
    setForgot(!forgot);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const handleSubmitOtp=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen gap-5">
      <div className='grid place-items-center pt-10'>
        <BankInfo />
        <Link to="/" className={buttonStyle}><FaArrowLeft /></Link>
      </div>
      <div className="flex flex-col justify-center items-center py-10 px-2">
        <form className="bg-[#7E99A3] rounded-xl sm:w-4/5 w-full">
          <center>
            <p className="bg-[#4C585B] rounded-t-xl text-white p-3 text-center font-bold text-2xl md:text-3xl shadow-lg shadow-black">
              Sign In
            </p>
            <div className="my-3 p-4">
              <div className="my-4">
                <input type="text" name="phone" className={inputBoxStyle} placeholder='User Id' />
              </div>
              {forgot && (
                <div>
                  <input type="number" className={inputBoxStyle} placeholder='Enter the OTP sent to your number'/>
                  <br />
                  <Link className="text-black hover:underline text-lg font-bold pt-4" onClick={forgotPwd}>Know Password?</Link>
                </div>
              )}
              {!forgot && (
                <div className="my-4">
                  <input type="password" name="pwd" className={inputBoxStyle} placeholder='Password' />
                  <br />
                  <Link className="text-black hover:underline text-lg font-bold my-2" onClick={forgotPwd}>Forgot Password?</Link>
                </div>
              )}
            </div>
            <div className='my-2'>
              {forgot && !loading && (
                <button className={buttonStyle} onClick={handleSubmitOtp}>
                  Sign In
                </button>
              )}
              {!forgot && !loading && (
                <button className={buttonStyle} onClick={handleSubmit}>
                  Sign In
                </button>
              )}
            </div>
            <div className='my-3'>
              <p className='text-lg font-bold p-0.5'>Didn't have an account?</p>
              <Link to="/newAccount" className="text-black hover:underline text-lg font-bold">Sign Up</Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  )
}
export default Signin
/*
darker: #4C585B
lighter: #7E99A3
more lighter: #A5BFCC
background: #F4EDD3
*/