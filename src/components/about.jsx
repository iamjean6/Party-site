import { useState } from 'react'

const About = () => {
  return (
    <div id='about' className='min-h-screen w-full bg-gray-50'>
      {/* WHO WE ARE SECTION */}
      <div className='max-w-4xl mx-auto px-6 py-6'>
        <div className='text-center space-y-6'>
          <h2 className='text-4xl font-bold text-gray-800 tracking-tight'>
            About Us
          </h2>
        </div>
        <div className='w-12 h-1 bg-gray-300 mx-auto my-3 rounded-full'></div>
        <p className='text-lg text-center text-gray-600 leading-relaxed max-w-3xl mx-auto'>
          The Liberty and Development Party (LDP) is a political organization dedicated to promoting freedom, democracy, and sustainable development.
        </p>
      </div>

      {/* WHERE IT ALL BEGAN SECTION */}
      <div className='bg-white max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24'> 
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          <div className='space-y-6 pr-4 md:pr-8'>
            <h2 className='text-3xl md:text-4xl  font-zentry font-bold text-gray-900 leading-tight'>
              Our History and Evolution
            </h2>
            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
              The term "Liberal Democratic Party" has historic roots in Kenya's multi-party evolution. 
              There was a previous LDP formation that played a crucial role in the early 2000s political realignment, 
              contributing to the historic landmark National Rainbow Coalition (NARC) and constitutional reforms. 
              LDP has since then morphed into a modern political movement that builds on those liberal democratic 
              foundations, specifically tailored for the present Kenyan political landscape. We are registered and 
              compliant with the ORPP and are active participants in national democratic processes.
            </p>
          </div>
          <div className='relative order-last'>
            <video 
              src="videos/press1.mp4" 
              className='w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 brightness-95 hover:brightness-100'
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      {/* WHAT WE DO SECTION */}
      <div className='bg-gray-50 max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center'>
          
          {/* LEFT COLUMN - Image with Overlays */}
          <div className='relative'>
            <div className='relative rounded-lg  shadow-lg'>
              <img 
                src="img/site1.jpg" 
                alt="Kenya landscape" 
                className='w-full h-auto  md:h-[600px] rounded-lg lg:h-[800px] object-cover'
              />
              
              {/* Circular Overlays */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 
                md:bottom-auto md:left-auto md:-right-12 lg:-right-16 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                flex flex-row md:flex-col gap-3 md:gap-6 z-10'>
                <div className='w-24 md:w-32 lg:w-36 h-24  md:h-32 lg:h-36  rounded-full border-4 md:border-[6px] border-green-600 overflow-hidden shadow-lg bg-white p-1 md:mb-24'>
                  <img 
                    src="img/unity.jpg" 
                    alt="Community engagement" 
                    className='w-full h-full object-cover rounded-full '
                  />
                </div>
                
                <div className='w-24 md:w-32 lg:w-36 h-24  md:h-32 lg:h-36 rounded-full border-4 md:border-[6px] border-blue-600 overflow-hidden shadow-lg bg-white p-1 md:mb-24'>
                  <img 
                    src="img/unity2.jpg" 
                    alt="Democratic process" 
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
                
                <div className='w-24 md:w-32 lg:w-36 h-24  md:h-32 lg:h-36 rounded-full border-4 md:border-[6px] border-white overflow-hidden shadow-lg bg-white p-1'>
                  <img 
                    src="img/kenya3.jpg" 
                    alt="National development" 
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN - Content */}
          <div className='space-y-8 md:space-y-10'>
            <h2 className='text-3xl md:text-4xl mb-2 lg:text-5xl font-bold text-gray-900 leading-tight'>
              What We Do
            </h2>
            
           <div className='space-y-3'>
  <h3 className='text-xl md:text-2xl font-semibold text-gray-900 leading-tight'>
    Core Principles
  </h3>
  <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
    LDP is founded on the following core tenets of liberal democracy:
  </p>
  <ul className='space-y-4 mt-1'>
    <li className='flex gap-3'>
      <span className='text-green-600 font-bold mt-1'>•</span>
      <div>
        <span className='font-semibold text-gray-900'>Individual freedoms and human rights</span>
        <span className='text-gray-600'> - Respect for every Kenyan's freedom of expression, association, and conscience.</span>
      </div>
    </li>
    <li className='flex gap-3'>
      <span className='text-green-600 font-bold mt-1'>•</span>
      <div>
        <span className='font-semibold text-gray-900'>Rule of law and justice</span>
        <span className='text-gray-600'> - An independent judiciary and equal access to justice irrespective of ethnicity, gender, belief, or status.</span>
      </div>
    </li>
    <li className='flex gap-3'>
      <span className='text-green-600 font-bold mt-1'>•</span>
      <div>
        <span className='font-semibold text-gray-900'>Economic opportunity and entrepreneurship</span>
        <span className='text-gray-600'> - Promoting free enterprise, innovation, and economic policies that create jobs and prosperity.</span>
      </div>
    </li>
     <li className='flex gap-3'>
      <span className='text-green-600 font-bold mt-1'>•</span>
      <div>
        <span className='font-semibold text-gray-900'>Economic opportunity and entrepreneurship</span>
        <span className='text-gray-600'> - Promoting free enterprise, innovation, and economic policies that create jobs and prosperity.</span>
      </div>
    </li>
     <li className='flex gap-3'>
      <span className='text-green-600 font-bold mt-1'>•</span>
      <div>
        <span className='font-semibold text-gray-900'>Economic opportunity and entrepreneurship</span>
        <span className='text-gray-600'> - Promoting free enterprise, innovation, and economic policies that create jobs and prosperity.</span>
      </div>
    </li>
  </ul>
</div>
          <div className='space-y-3'>
    <h3 className='text-xl md:text-2xl font-semibold text-gray-900 leading-tight'>
      What We Pride In
    </h3>
    <ul className='space-y-3 text-base md:text-lg text-gray-600 leading-relaxed'>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>We are non-tribal and practice issue-based politics</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>We hold democratic and transparent nominations</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>We intentionally facilitate members' mentor and leadership programmes</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>Being affiliated with international liberal networks</span>
      </li>
    </ul>
  </div>
  
  {/* OUR COMMITMENT */}
  <div className='space-y-3'>
    <h3 className='text-xl md:text-2xl font-semibold text-gray-900 leading-tight'>
      Our Commitment
    </h3>
    <ul className='space-y-3 text-base md:text-lg text-gray-600 leading-relaxed'>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>Freedom and human dignity</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>National unity</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>Economic empowerment</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>Ethical leadership</span>
      </li>
      <li className='flex items-start gap-3'>
        <span className='text-green-600 font-bold text-xl mt-0.5 flex-shrink-0'>•</span>
        <span>Accountable governance</span>
      </li>
    </ul>
  </div>
</div>
          </div>
          
        </div>
      </div>
    
  );
};

export default About;