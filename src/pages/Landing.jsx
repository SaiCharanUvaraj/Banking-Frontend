import React from 'react'
import LandingNavbar from '../components/LandingNavbar'
import BankInfo from '../components/BankInfo';
import WhyChoose from '../components/WhyChoose';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Landing = () => {
  const buttonStyle= "rounded-lg bg-[#4C585B] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2";
  return (
    <div>
      <LandingNavbar />
      <div className='h-screen pt-14 grid place-items-center'>
        <div>
          <BankInfo />
        </div>
        <div className='grid place-items-center'>
          <Link to="/home" className="rounded-xl bg-[#4C585B] scale-110 hover:scale-125 active:scale-105 p-3 text-4xl md:text-xl text-white transition-all duration-300 font-bold">Get Started</Link>
        </div>
      </div>
      <div className='bg-[#7E99A3] py-10'>
        <WhyChoose explain={true} />
      </div>
      <div className='p-3 pt-10 grid place-items-center'>
        <p className='text-center font-bold text-5xl text-[#4C585B] py-10'>Already an User ?</p>
        <button className="rounded-xl bg-[#4C585B] scale-110 hover:scale-125 active:scale-105 p-3 text-4xl md:text-xl text-white transition-all duration-300 font-bold">Sign In</button>
      </div>
      <div className='pt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default Landing