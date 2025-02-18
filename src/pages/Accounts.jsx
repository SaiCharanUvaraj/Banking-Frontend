import React, { useState } from 'react'
import user from "../Data/user.json";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRupeeSign } from 'react-icons/fa';
import Footer from '../components/Footer';

const Accounts = () => {
    const buttonStyle="rounded-lg bg-white hover:scale-110 active:scale-95 p-2 text-2xl md:text-xl text-black transition-all duration-300 font-bold";
    const [select,setSelect]=useState(null);
    const [submitted,setSubmitted]=useState(false);
    const inputBoxStyle = "rounded-lg mt-2 w-full text-black focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2 font-semibold";
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
    }
    const removeSelect=(e)=>{
        e.preventDefault();
        setSubmitted(false);
        setSelect(null);
    }
    return (
        <div>
            <Navbar />
            {select===null &&
                <div>
                    <div className='pt-40'>
                        <p className='text-4xl text-[#4C585B] text-center font-bold'>Your Accounts</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-5 py-10'>
                            {user.accounts.map((item,index)=>(
                                <div key={index} className='bg-[#4C585B] text-white rounded-lg p-7 gap-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300'>
                                    <p className='text-3xl text-center font-bold'>Account <strong>{item.no}</strong></p>
                                    <p className='text-xl text-center font-semibold p-3'><strong>{item.branch}</strong></p>
                                    <div className='flex justify-center items-center py-5'>
                                        <Link onClick={()=>setSelect(item)}className={buttonStyle}>View Balance</Link>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                    <div className='p-3 py-10 grid place-items-center'>
                        <p className='text-center font-bold text-4xl text-[#4C585B] py-10'>Need to open an Account?</p>
                        <Link to="/applyAccount" className="rounded-xl bg-[#4C585B] scale-110 hover:scale-125 active:scale-105 p-3 text-4xl md:text-xl text-white transition-all duration-300 font-bold">Open an Account</Link>
                    </div>
                </div>
            }
            {select!==null &&
                <div className='flex justify-center items-center h-screen'>
                    <div className='bg-[#4C585B] text-white rounded-lg p-5 gap-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300'>
                        <p className='text-3xl text-center font-bold'>Account <strong>{select.no}</strong></p>
                        <p className='text-xl text-center font-semibold p-3'><strong>{select.branch}</strong></p>
                        {!submitted &&
                            <div>
                                <p className='text-lg text-left font-semibold p-3 text-red-400'>Enter the password to view account balance</p>
                                <input type="password" className={inputBoxStyle} placeholder='Password'/>
                                <br />
                                <div className='flex justify-center items-center py-5'>
                                    <button onClick={handleSubmit}className={buttonStyle}>Submit</button>
                                </div>
                            </div>
                        }
                        {submitted &&
                            <div className='flex justify-center items-center py-5 space-x-2 text-3xl font-bold'>
                                <FaRupeeSign className='text-4xl text-white' />
                                {select.balance}
                            </div>
                        }
                        <div className='flex justify-center items-center py-5'>
                            <button onClick={removeSelect} className={buttonStyle}><FaArrowLeft /></button>
                        </div>
                    </div> 
                </div>
            }
            <Footer />
        </div>
    )
}

export default Accounts