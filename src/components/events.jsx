import { useState, useEffect } from 'react';
import { MdOutlineTimer, MdOutlineCalendarToday,MdOutlineChatBubbleOutline} from "react-icons/md";
import { events } from '../../constants/index.js';
const Events = () => {

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("Not available");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};


 


  return (
    <div id="events" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl uppercase font-bold text-gray-900 mb-4">
            UPDATES
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Stay tuned for upcoming events and activities organized by our party.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {events.map((event) => {
            const timeLeft = useCountdown(event.date);
            return (
            <div key={event.id} className="flex gap-6">

              {/* Image */}
              <div className="w-40 h-32 flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">

             <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
                <MdOutlineTimer className="text-base" />
                <span>{timeLeft}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600 transition">
                  {event.title}
                </h3>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                    {/* Date */}
                <div className="flex items-center gap-2">
                    <MdOutlineCalendarToday className="text-base" />
                    <span>{event.day}</span>
                     </div>
                     <span>|</span>
                <div className="flex items-center gap-2">
                    <MdOutlineChatBubbleOutline className="text-base" />
                    <span>{event.comments} Comment</span>
                    </div>
                </div>


                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>

                {/* Read more */}
                <a
                  href={event.link}
                  className="text-sm font-medium text-gray-900 hover:text-red-600 transition w-fit"
                >Learn More  
                
                </a>

              </div>
            </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Events;
