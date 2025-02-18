import React from 'react'
import Navbar from '../components/Navbar'
import BankInfo from '../components/BankInfo'
import Footer from '../components/Footer';
import WhyChoose from '../components/WhyChoose';
import Services from '../components/Services';
import user from '../Data/user.json';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='h-screen pt-14 grid place-items-center'>
        <BankInfo />
        <div className='grid place-items-center gap-3'>
          <p className='font-bold text-4xl text-[#4C585B]'>Welcome, <strong>{user.name.first}</strong></p>
        </div>
      </div>
      <div className='py-10'>
        <Services />
      </div>
      <div className='bg-[#7E99A3] py-10'>
        <WhyChoose explain={false} />
      </div>
      <div className='pt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default Home