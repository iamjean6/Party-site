import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Kenya.json';
import { FaShareAlt } from "react-icons/fa";
import Button from './button';
import { VscGitStashApply } from "react-icons/vsc";
import { jobInfoItems, requirements } from '../../constants/index.js';
const President = () => {
  // Dynamic requirements data


  return (
    <div className='w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8'>
      {/* Header Section */}
      <div className=' w-full p-6 bg-gray-200 md:p-8 rounded-lg  mb-6'>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
            <img src="img/logo.jpeg" alt="Logo" className='w-24 h-24 rounded-full'/> 
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 uppercase'>Presidential aspirant</h1>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          Lasd agile frameworks to provide a roabust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to 
          further the overall value proposition. Organically grow the holistic world view 
          of disruptive innovation via workplace diversity and empowerment.
        </p>
        
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-gray-600'>Share this</span>
          <button className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
            <FaShareAlt className="w-4 h-4 " />
              
          </button>
        </div>
        
                    <Button
                    id="Apply Now"
                    title="Apply Now"
                    leftIcon={<VscGitStashApply />}
                    containerClass="
                     mt-8 
                     inline-flex items-center justify-center 
                     px-8 py-4 
                     !bg-green-400 text-black 
                     font-bold 
                     shadow-lg 
                     gap-2 
                     hover:bg-green-300 
                     transition
                     "
                     />
      </div>

      {/* Job Information Section */}
      <div className='bg-gray-50 p-6 md:p-8 rounded-lg mb-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-6'>Seat Information</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Column: Job Details Grid */}
          <div className=''>
            <div className='grid grid-cols-2 gap-3 py-4'>
                {jobInfoItems.map((item, index) => (
              <div key={index} className='flex items-start gap-3'>
                <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
                  <img className='w-10 h-10 '
                  src="img/Check-pin.png"
                  />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
            </div>
            
                 <div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Candidate</h2>
        
        <p className="text-gray-600 leading-relaxed pb-4">
          Lasd agile frameworks to provide a roabust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to 
          further the overall value proposition. Organically grow the holistic world view 
          of disruptive innovation via workplace diversity and empowerment.
        </p>
         <h2 className="text-2xl font-bold text-gray-900 mb-4">Seat Requirements</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        {/* Dynamic Requirements List */}
        <ul className="space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="leading-relaxed">{requirement}</span>
            </li>
          ))}
        </ul>
       {/* <div className='py-4'>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Med Hospital</h2>
        
        <p className="text-gray-600 leading-relaxed">
          Sed perspiciatis unde omnis natus error sit voluptatem totam aperiam, eaque 
          omnis quae architecto beatae explicabo. Nemotate enim ipsam voluptatem quia 
          voluptas error aspernatur aut odit aut fugit
        </p>
        </div>*/}
      <div className="py-4 flex flex-row bg-gray-300 rounded-lg items-center justify-left gap-3 text-center">
  <Lottie 
    animationData={animationData}
    loop
    autoplay
    className="w-36 h-36 mt-4 rounded-full overflow-hidden"
  />

  <p className="text-5xl  md:text-6xl font-aldine uppercase text-black cursor-pointer">
   <span className='text-red-700'>Be </span> <span className='text-white font-bold'>part</span>  of  <span className='text-white'>the </span>  <span className='text-green-600'>change</span> 
  </p>
</div>

     </div>
          </div>
 
          {/* Right Column: Hospital Card */}
  <div className="flex justify-center">
  <div className="flex flex-col items-center gap-8">

    {/* ================= FIRST CARD ================= */}
   <div className="hidden md:flex bg-gray-200 w-88 p-6 rounded-sm h-[350px] flex-col items-center text-center py-8">

      
      <div className="w-40 h-40 mb-4">
        <img
          src="img/logo.jpeg"
          alt="Med Hospital"
          className="w-40 h-40 rounded-full"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        Liberal Democratic Party
      </h3>

      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          +12 345 678 910
        </p>

        <p className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ldp-kenya.com
        </p>
      </div>
    </div>

    {/* ================= SECOND CARD ================= */}
    <div className=" p-6 md:p-8  w-full max-w-4xl flex flex-col gap-6">

      {/* Map Section */}
      <div className="w-full h-full  flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl">!</span>
          </div>
          <p className="text-gray-600 text-sm">
            Oops! Something went wrong.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            This page didn't load Google Maps correctly.
          </p>
        </div>
      </div>

      {/* Location Details */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Kenya
        </h2>
        <p className="text-gray-600">
          Domneasca Street 8002155
        </p>
      </div>

    </div>

  </div>
</div>

      </div>
  
    </div>
    </div>
  );
};

export default President;