import { useState } from 'react';
import { GoLaw } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import Button from './button';
import { FaVoteYea } from "react-icons/fa";
import { IoMegaphoneSharp } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";

const Agenda = () => {
  const navigate = useNavigate();
  return (
    <div id="agenda" className=" w-full  bg-gray-50">

          <div className='relative h-64 md:h-80 lg:h-96'>

  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(img/donate.jpg)'}}>
  <div className='absolute inset-0 bg-black-50'></div>
  </div>
 <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-white uppercase">
      What we've Done Already!
    </h1>
    
  </div>
</div>
      <div className="text-center mb-12 mt-6 px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          
        </h2>
         <p className="text-gray-500 text-lg md:text-xl italic">
            Our journey of progress and impact in Kenya's political landscape.
        </p>
      </div>

      {/* Testimonial + Progress Bars */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4 md:px-0 max-w-6xl mx-auto">

        {/* Testimonial */}
        <div className="bg-white shadow-md p-8 rounded-lg relative md:w-1/2">
          <p className="mb-8 text-gray-700">
            Human progress is neither automatic nor inevitable. Every step
            toward the goal of justice requires sacrifice, suffering, and
            struggle.
          </p>

          <div>
            <h4 className="font-bold text-black">LDP Council</h4>
          </div>

          {/* Speech bubble pointer */}
          <div
            className="absolute -bottom-4 left-10 w-0 h-0 
            border-l-[16px] border-l-transparent
            border-r-[16px] border-r-transparent
            border-t-[16px] border-t-white"
          />

          {/* Avatar */}
          <div className="absolute -bottom-20 left-8 ">
            <img
              src="/img/logo.jpeg"
              alt="Speaker"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Progress Metrics */}
        <div className="flex flex-col gap-5 pt-16 w-3/4">

          {/* Metric 1 */}
          <div>
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Political Correctitude</span>
              <span>90%</span>
            </div>
            <div className="w-full h-8 bg-white rounded overflow-hidden">
              <div className="h-full w-[90%] bg-black/80" />
            </div>
          </div>

          {/* Metric 2 */}
          <div>
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Made With Donations</span>
              <span>80%</span>
            </div>
            <div className="w-full h-8 bg-white rounded overflow-hidden">
              <div className="h-full w-[80%] bg-black/80" />
            </div>
          </div>

          {/* Metric 3 */}
          <div>
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Law Knowledge</span>
              <span>70%</span>
            </div>
            <div className="w-full h-8 bg-white rounded overflow-hidden">
              <div className="h-full w-[70%] bg-black/80" />
            </div>
          </div>

          {/* Metric 4 */}
          <div>
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Public Trust</span>
              <span>85%</span>
            </div>
            <div className="w-full h-8 bg-white rounded overflow-hidden">
              <div className="h-full w-[85%] bg-black/80" />
            </div>
          </div>

          {/* Metric 5 */}
          <div>
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Grassroots Reach</span>
              <span>75%</span>
            </div>
            <div className="w-full h-8 bg-white rounded overflow-hidden">
              <div className="h-full w-[75%] bg-black/80" />
            </div>
          </div>

        </div>
      </div>
      {/* Logo / Achievements Slider */}

<div className="mt-24 py-14">
  <div className="max-w-6xl mx-auto px-4">

    {/* Centered Header */}
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold text-black">
        Our Achievements
      </h3>
    </div>

    {/* Swiper */}
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={40}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".achievement-prev",
        nextEl: ".achievement-next",
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="mb-10"
    >
     <SwiperSlide>
  <div className="flex flex-col items-center justify-center h-50 md:h-60">
    <img
      src="img/unity.jpg"
      className="h-40 md:h-48 lg:h-50 object-contain rounded-sm"
      alt="National Unity"
    />
    <span className="mt-3 text-sm text-gray-500">
      National Unity Campaign
    </span>
  </div>
</SwiperSlide>


      <SwiperSlide>
  <div className="flex flex-col items-center justify-center h-50 md:h-60">
    <img
      src="/img/about2.jpeg"
      className="h-40 md:h-48 lg:h-50 object-contain"
      alt="Justice Union"
    />
    <span className="mt-3 text-sm text-gray-500">
      Justice Union
    </span>
  </div>
</SwiperSlide>


      <SwiperSlide>
  <div className="flex flex-col items-center justify-center h-50 md:h-60">
    <img
      src="/img/site2.jpg"
      className="h-40 md:h-48 lg:h-50 object-contain"
      alt="Master Law Firm"
    />
    <span className="mt-3 text-sm text-gray-500">
      Youth Empowerment Initiative
    </span>
  </div>
</SwiperSlide>


      <SwiperSlide>
  <div className="flex flex-col items-center justify-center h-50 md:h-60">
    <img
      src="img/site3.jpg"
      className="h-40 md:h-48 lg:h-50 object-contain"
      alt="Master Law Firm"
    />
    <span className="mt-3 text-sm text-gray-500">
      Public Alliance
    </span>
  </div>
</SwiperSlide>

    </Swiper>

    {/* Bottom Center Arrows */}
    <div className="flex justify-center gap-6">
      <button
        className="
          achievement-prev
          w-12 h-12
          border border-red-500
          text-red-500
          flex items-center justify-center
          hover:bg-red-500 hover:text-white
          transition
        "
      >
        ‹
      </button>

      <button
        className="
          achievement-next
          w-12 h-12
          border border-red-500
          text-red-500
          flex items-center justify-center
          hover:bg-red-500 hover:text-white
          transition
        "
      >
        ›
      </button>
    </div>

  </div>
</div>



  {/* MEMORANDUM GRID */}
<div className="py-4 bg-white">
  <div className="w-full mx-auto px-4">

    {/* Section Title */}
    <div className="text-center max-w-7xl mb-14">
      <h2 className="text-4xl font-bold mb-3">Party Memorandum</h2>
      <p className="text-gray-500 max-w-xl mx-auto">
        Our commitments, actions, and vision expressed through leadership and policy.
      </p>
    </div>

    {/* 3 x 2 GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2   md:min-h-[1000px]">

      {/* TOP ROW */}

      {/* CMD */}
      <div className="p-8 self-start bg-gray-50 h-full flex flex-col ">
         <FaHeart className='text-5xl' />
         <a href="#" className='text-red-400 italic text-xl '>Learn more</a>
        <h3 className="text-3xl font-bold mb-1 uppercase">About us</h3>
        <p className="text-gray-600 leading-relaxed">
          	The Liberal Democratic Party (LDP) is a modern, inclusive, and policy-driven political movement committed to building a free, just, and prosperous Kenya.
            We believe Kenya’s future lies in ideas, not tribes; in institutions, not personalities; and in service, not self-interest.  
        </p>
                    <Button
  id="Vote with us"
  title="Vote with us"
  rightIcon={<FaVoteYea />}
  containerClass="
    mt-2
    inline-flex items-center justify-center 
    px-8 py-4 
    !bg-green-400 text-black 
    font-bold 
    shadow-lg 
    gap-2 
    hover:bg-green-300 
    transition
  "
    onClick={() => navigate("/")}
  />
      </div>

      {/* PICTORIAL */}
      <div className="overflow-hidden h-full">
        <img
          src="img/about1.jpeg"
          alt="Party activity"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CMD */}
    <div className="p-8 bg-gray-50 h-full flex flex-col ">
         <IoMegaphoneSharp className='text-5xl' />
         <a href="#" className='text-red-400 italic text-xl '>We fight</a>
        <h3 className="text-3xl font-bold mb-1 uppercase">FOR LIBERTY</h3>
        <p className="text-gray-600 leading-relaxed">
          	We believe Kenya must move beyond personality cults, tribal politics, and empty promises. Our politics is rooted in ideas, institutions, and service.
            •	We believe leadership should be earned through ideas, integrity, and service—not inherited through ethnicity or patronage.
        </p>
                    <Button
  id="Vote with us"
  title="Vote with us"
  rightIcon={<FcMoneyTransfer />}
  containerClass="
    mt-4
    inline-flex items-center justify-center 
    px-8 py-4 
    !bg-green-400 text-black 
    font-bold 
    shadow-lg 
    gap-2 
    hover:bg-green-300 
    transition
  "
  onClick={()=> navigate("/contribution")}
  />
      </div>

      {/* BOTTOM ROW */}

      {/* VIDEO / PICTORIAL */}
      <div className="h-full bg-black">
        <video className="w-full h-full object-cover"
           src="videos/press1.mp4"  
          autoPlay
        loop
        muted
        playsInline
        />
      </div>

      {/* CMD */}
      <div className="p-8 bg-gray-50 h-full flex flex-col ">

        <IoDiamondOutline  className='text-5xl'/>
        <p className='text-xl text-red-400 italic'>Take Part Of</p>
        <h3 className="text-3xl font-bold mb-1 uppercase">Our mission</h3>
        <p className="text-gray-600 leading-relaxed">
          Transparency and strong institutions are the pillars of democracy.
        </p>
                        <Button
  id="Donate Now"
  title="DONATE NOW"
  rightIcon={<FcMoneyTransfer />}
  containerClass="
    mt-4
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

      {/* PICTORIAL */}
      <div className="overflow-hidden h-full">
        <img
          src="/img/site.jpg"
          alt="Community engagement"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</div>

    </div>
  );
};

export default Agenda;
 