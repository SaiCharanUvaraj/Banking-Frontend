import React from 'react'
import { FaUserShield, FaMoneyCheckAlt, FaHandsHelping, FaHeadset, FaExchangeAlt, FaAward, FaUsers, FaLeaf, FaUserFriends } from "react-icons/fa";
const WhyChoose = (props) => {
  return (
    <div className='p-5'>
        {props.explain && <p className='text-center font-bold text-5xl text-white py-10'>Why to choose Fin Trust ?</p>}
        {!props.explain && <p className='text-center font-bold text-5xl text-white py-10'>Why you have choosen Us ?</p>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl font-bold text-center'>Easy Account Management</p>
                <FaMoneyCheckAlt className='text-8xl text-[#F4EDD3]'/>
                {props.explain && <p className='text-lg font-semibold text-justify'>Banking made simple! With our user-friendly online dashboard and mobile app, you can track expenses, transfer funds, and manage your finances anytime, anywhere—without the hassle of paperwork.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl font-bold'>Advanced Security</p>
                <FaUserShield  className='text-8xl text-[#F4EDD3]'  />
                {props.explain && <p className='text-lg font-semibold text-justify'>At FinTrust, security is our top priority. We use advanced encryption and multi-factor authentication (MFA) to protect your accounts from fraud and cyber threats. Your financial data stays safe with us.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'> Instant Money Transfers</p>
                <FaExchangeAlt  className='text-8xl text-[#F4EDD3]'/>
                {props.explain && <p className='text-lg font-semibold text-justify'>Time is money! Our cutting-edge banking technology ensures that your transactions—whether local or international—are processed within seconds. No delays, no waiting, just seamless transactions.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'>24/7 Support</p>
                <FaHeadset  className='text-8xl text-[#F4EDD3]' />
                {props.explain && <p className='text-lg font-semibold text-justify'>Need assistance? Our dedicated support team is available 24/7 to resolve your queries. Chat with us, call our helpline, or email us—we are here to help whenever you need us.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'>Strong Community Support</p>
                <FaHandsHelping  className='text-8xl text-[#F4EDD3]' />
                {props.explain && <p className='text-lg font-semibold text-justify'>We go beyond banking! FinTrust actively supports local businesses, financial education, and community initiatives, ensuring that we grow together with our customers.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'>Award-Winning Bank </p>
                <FaAward  className='text-8xl text-[#F4EDD3]' />
                {props.explain && <p className='text-lg font-semibold text-justify'>Recognized for excellence in banking, FinTrust has won multiple industry awards for customer satisfaction, ethical banking, and innovative financial solutions.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'>Trusted by Millions</p>
                <FaUsers  className='text-8xl text-[#F4EDD3]' />
                {props.explain && <p className='text-lg font-semibold text-justify'>With years of excellence in banking, FinTrust is trusted by millions of customers. Our reputation is built on integrity, transparency, and reliability, ensuring you always bank with confidence.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'>Ethical & Sustainable Banking</p>
                <FaLeaf  className='text-8xl text-[#F4EDD3]' />
                {props.explain && <p className='text-lg font-semibold text-justify'>We believe in responsible banking! FinTrust invests in eco-friendly and ethical financial initiatives, helping build a greener and more sustainable future.</p>}
            </div>
            <div className='bg-[#4C585B]/50 backdrop-blur-xl text-white rounded-lg p-5 grid place-items-center gap-4 hover:scale-105 hover:bg-[#4C585B]/60 shadow-lg hover:shadow-xl transition-all duration-200'>
                <p className='text-3xl text-center font-bold'>Personalized Experience</p>
                <FaUserFriends  className='text-8xl text-[#F4EDD3]' />
                {props.explain && <p className='text-lg font-semibold text-justify'>You are not just an account number at FinTrust. We understand your financial needs and provide a personalized experience, ensuring you get the best plans and services tailored for you.</p>}
            </div>
        </div>
    </div>
  )
}

export default WhyChoose