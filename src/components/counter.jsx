import { useEffect, useState } from 'react';
import Navbar from './navbar';

const Counter = () => {
  const useCountdown = (targetDate) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const target = new Date(targetDate);
        const diff = target - now;

        if (diff <= 0) {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          });
          clearInterval(interval);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
  };

  // Set your target date here
  const targetDate = '2026-07-06T00:00:00';
  const timeLeft = useCountdown(targetDate);

  // Helper function to format numbers with leading zeros
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className='relative w-full h-screen py-16 overflow-hidden'>
      <video
        src="videos/press1.mp4"
        className='absolute object-cover top-0 left-0 w-full h-full'
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className='absolute top-0 left-0 w-full h-full bg-blue-900 opacity-70'></div>

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
        <h1 className='text-5xl md:text-7xl font-bold text-center mb-4'>
          The Campaign Starts In:
        </h1>

        <p className='text-lg md:text-xl italic text-center mb-12 opacity-90'>
          Donec feugiat et odio ut viverra. Nulla non massa hendrerit
        </p>

        <div className='flex flex-wrap gap-6 justify-center'>
          <div className="bg-red-700 rounded-lg p-8 min-w-[160px] shadow-2xl">
            <div className='text-6xl font-bold text-center mb-2'>
              {formatNumber(timeLeft.days)}
            </div>
            <div className='text-lg text-center uppercase tracking-wider'>DAYS</div>
          </div>

          <div className="bg-red-700 rounded-lg p-8 min-w-[160px] shadow-2xl">
            <div className='text-6xl font-bold text-center mb-2'>
              {formatNumber(timeLeft.hours)}
            </div>
            <div className='text-lg text-center uppercase tracking-wider'>HOURS</div>
          </div>

          <div className="bg-red-700 rounded-lg p-8 min-w-[160px] shadow-2xl">
            <div className='text-6xl font-bold text-center mb-2'>
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className='text-lg text-center uppercase tracking-wider'>MINUTES</div>
          </div>

          <div className="bg-red-700 rounded-lg p-8 min-w-[160px] shadow-2xl">
            <div className='text-6xl font-bold text-center mb-2'>
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className='text-lg text-center uppercase tracking-wider'>SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;