import { useState, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";
import { teamMembers } from "../../constants/index.js";

const Members = () => {
 
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div id="members" className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 text-center">
          <h1 className="text-4xl lg:text-5xl mb-4 uppercase font-general font-bold text-gray-900">
            Organization Structure
          </h1>
          <p className="text-gray-600 font-robert-regular text-lg leading-relaxed">
            LDP is run in a professional and corporate-like manner with a clear separation between its administrative and political wings ensuring efficiency, accountability, and modern governance.
          </p>
        </div>

        {/* Meet the Team Slider */}
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2.5 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2.5 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-8 snap-x snap-mandatory scroll-smooth overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center snap-start flex-shrink-0 w-full lg:w-1/4 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 rounded-l object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm  text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Member Details */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full rounded-sm h-108 object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold  uppercase tracking-wide text-gray-900">
                {selectedMember.name}
              </h1>
              <p className="mt-1 text-2xl  text-gray-700">
                {selectedMember.role}
              </p>

              <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                <p>{selectedMember.bio}</p>
              </div>

              {/* Socials */}
             {/* Socials */}
<div className="mt-10 pt-6 border-t border-gray-200">
  <div className="flex justify-center lg:justify-end gap-4 text-gray-400">
    {selectedMember.socials.facebook && (
      <a href={selectedMember.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">
        <FaFacebook className="h-5 w-5" />
      </a>
    )}
    {selectedMember.socials.twitter && (
      <a href={selectedMember.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">
        <FaTwitter className="h-5 w-5" />
      </a>
    )}
    {selectedMember.socials.linkedin && (
      <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">
        <FaLinkedinIn className="h-5 w-5" />
      </a>
    )}
    {selectedMember.socials.instagram && (
      <a href={selectedMember.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">
        <FaInstagram className="h-5 w-5" />
      </a>
    )}
    {selectedMember.socials.tiktok && (
      <a href={selectedMember.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">
        <FaTiktok className="h-5 w-5" />
      </a>
    )}
  </div>
</div>


              {/* Contacts */}
              <div className="mt-8 space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="font-semi-bold text-green-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer hover:text-gray-600 transition " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>{selectedMember.email}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semi-bold text-green-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer hover:text-gray-600 transition " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <p>{selectedMember.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semi-bold text-green-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer hover:text-gray-600 transition " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p>{selectedMember.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
