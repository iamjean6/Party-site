import { useEffect } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import Button from './button';
import { IoMegaphoneOutline } from "react-icons/io5";
const Contacts = () => {
  return (
    <div id="contact" className='min-h-screen w-full overflow-hidden'>
      <div className='relative h-[60vh] md:h-[70vh]'>
         <div className='absolute inset-0'>
            <img
            src="/img/kenya1.jpeg"
            alt='campaign'
            className='h-full w-full object-cover'
            />
         </div>
         <div className='absolute inset-0 bg-blue-900/80'></div>
         <div className='relative z-10 flex h-full flex-col items-center justify-center text-center px-4'>
            <h1 className='text-white text-4xl md:text-6xl font-extrabold leading-tight'>
                Connect With The <br/> Party
             </h1>
            <p className="mt-4 max-w-xl text-white/80 text-lg md:text-base italic">
            Donec feugiat et odio ut viverra. Nulla non massa hendrerit
            </p>
         </div>
        
      </div>
      <div className='w-full bg-white py-16 px-8'>
        <div className='mx-auto max-w-4xl' >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                  Get In Touch With Our Team
            </h2>
            <p className='mt-3 text-gray-600 text-sm md:text-base'>
                Ask Anything Including Donations, Events and Campaign
            </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left'>
                <div>
                    <h4 className='text-sm font-semibold uppercase text-gray-900 mb-2'>
                        Our Headquarters
                    </h4>
                    <p className='text-gray-600 text-sm'>
                        <strong>Kenya:</strong> Embakasi Road
                    </p>
                    <p className='text-gray-600 text-sm'>
                        <strong>Kenya:</strong> Embakasi Road
                    </p>
                </div>
                <div>
                    <h4 className='text-sm font-semibold uppercase text-gray-900 mb-2'>
                       Reach Us 25/7 via Phone 
                    </h4>
                    <p className="text-gray-600 text-sm">
                        <strong>Nairobi:</strong> +2547-324-7382
                        </p>
                    <p className="text-gray-600 text-sm">
                        <strong>Kisumu:</strong> +2547-324-7383
                        </p>
                </div>
                <div>
                    <h4 className="text-sm font-semibold uppercase text-gray-900 mb-2">
                        Mail Us Anytime
                    </h4>
                <p className="text-gray-600 text-sm">donations@politica.tld</p>
                <p className="text-gray-600 text-sm">campaign@politica.tld</p>
                </div>
            </div>


        </div>
        <form action="" className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <input
                        type="text"
                        placeholder="Your Name*"
                        className="h-12 w-full border border-gray-300 px-4 text-sm outline-none focus:border-blue-600"
                        />
                       <input
                       type="email"
                       placeholder="Your Email*"
                       className="h-12 w-full border border-gray-300 px-4 text-sm outline-none focus:border-blue-600"
                       /> 

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input 
                type="text"
                placeholder='Phone Number'
                className='h-12 w-full border border-gray-300 px-4 text-sm text-gray-500 outline-none focus:border-blue-600'
                />
                 <select className="h-12 w-full border border-gray-300 px-4 text-sm text-gray-500 outline-none focus:border-blue-600">
                    <option>Select Subject</option>
                     <option>Select Subject</option>
                      <option>Select Subject</option>
                       <option>Select Subject</option>
                </select>

            </div>
             <div>
                <textarea
                placeholder="Kindly Describe Your Case *"
                className="h-40 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 resize-none"
                ></textarea>
      </div>
        </form>
        <div className="flex justify-center ">
            <div className="flex justify-center ">
                     <Button
                     id="Send Message"
                     title="Send Message"
                     leftIcon={<MdOutlineMessage />}
                     containerClass="
                     mt-8 
                      inline-flex items-center justify-center 
                      px-8 py-4 
                      !bg-green-400 text-black 
                      font-bold 
                      shadow-lg 
                      gap-2 
                      hover:bg-grey-300 
                      transition
                      "
                      />
            </div>

               </div>

      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            
    {/* Left info panel */}
    <div className="bg-blue-600 text-white justify-center items-center text-center uppercase px-8 py-16 flex flex-col justify-center">
      <h3 className="text-5xl  font-bold leading-tight">
        
      </h3>

      <p className="mt-2 text-3xl uppercase tracking-wide">
        
      </p>

      <p className="text-3xl ">
        
      </p>

      <p className="mt-4 text-lg font-semibold">
        
      </p>

      <button
      className="mt-6 inline-flex items-center justify-center gap-2
             h-12 w-44
             border border-white
             text-sm font-semibold uppercase tracking-wide
             transition-colors duration-200
             hover:bg-green-900 hover:text-white
             focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
             >
            <IoMegaphoneOutline className="text-lg" />
            <span>Get Involved</span>
            </button>

    </div>

    {/* Map */}
    <div className="h-[300px] md:h-full">
      <iframe
        title="location-map"
        className="h-full w-full border-0"
        src=""
        loading="lazy"
      ></iframe>
       </div>
        </div>
    
      </div>
    </div>
  );
};

export default Contacts;