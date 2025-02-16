import React from 'react';

const BankInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <img src="/favicon.png" className='pb-2 hover:animate-flip' alt="App Icon" width="250" height="250" />
      <p className="ubuntu-regular scale-125 text-7xl text-[#4C585B] soft-shadow-text">
        FinTrust
      </p>
      <p className="ubuntu-medium text-4xl text-[#7E99A3] font-extrabold text-center">
        Your Trusted Partner in Financial Growth!
      </p>
      <p className="text-2xl font-bold ubuntu-medium-italic text-center">
        Secure Your Future with FinTrust!
      </p>
    </div>
  );
}
export default BankInfo;

/*
darker: #4C585B
lighter: #7E99A3
more lighter: #A5BFCC
background: #F4EDD3
*/
