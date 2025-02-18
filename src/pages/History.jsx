import React from 'react'
import user from '../Data/user.json';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRupeeSign } from 'react-icons/fa';

const History = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-40'>
                <p className='text-4xl text-[#4C585B] text-center font-bold'>Transaction History</p>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-5 py-10'>
                    {user.transactions.map((item,index)=>(
                        <div key={index} className='bg-[#4C585B] text-white rounded-lg p-3 gap-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300'>
                            <p className='text-2xl text-center font-bold pb-3'>{item.description}</p>
                            <p className='text-lg text-left font-semibold'>Transaction Id: <strong>{item.id}</strong></p>
                            <p className='text-lg text-left font-semibold'>Account No: <strong>{item.recepient}</strong></p>
                            <p className='text-lg text-left font-semibold'>Date: <strong>{item.date}</strong></p>
                            {item.type==="Debit" &&
                                <div className='flex justify-center text-red-400 items-center py-2 space-x-1 text-xl font-bold'>
                                    <p>-</p>
                                    <FaRupeeSign />
                                    {item.amount}
                                </div>
                            }
                            {item.type==="Credit" &&
                                <div className='flex justify-center text-green-400 items-center py-2 space-x-1 text-xl font-bold'>
                                    <p>+</p>
                                    <FaRupeeSign />
                                    {item.amount}
                                </div>
                            }
                            <p className='text-md text-center font-bold'>Transaction {item.status}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div className='p-3 py-10 grid place-items-center'>
                <p className='text-center font-bold text-4xl text-[#4C585B] py-10'>Need to Transfer Money?</p>
                <Link to="/transaction" className="rounded-xl bg-[#4C585B] scale-110 hover:scale-125 active:scale-105 p-3 text-4xl md:text-xl text-white transition-all duration-300 font-bold">Transfer</Link>
            </div>
            <Footer />
        </div>
  )
}

export default History