import React, { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    { title: "Is LDP tribal?",
        content:"No. LDP is strictly national, inclusive, and policy-based."
     },
    { title: "Can anyone join the Party?",
        content:"Yes, any Kenyan who believes in democracy, justice, freedom, unity, and good governance."
     },
    { title: "How do I become a candidate?",
        content:"Through our transparent Electoral College nomination system."
     },
    { title: "Do you support coalitions?",
        content:"Yes, based on shared values and national interest."
     },
    { title: "Is LDP pro-business?",
        content:"Yes. We support entrepreneurship, SMEs, and innovation."
     }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - Phone Mockup */}
          <div className="flex justify-center  ">
            <div className="relative w-80 h-[600px] bg-white rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-10"></div>
              
              {/* Speaker */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full z-20"></div>
              
              {/* Image */}
              <img 
                src="/img/ogola4.jpeg" 
                alt="Person working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Content */}
          <div className="space-y-8">
            
            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Leverage agile frameworks to provide a robust synopsis for high level 
                overviews. Iterative approaches to corporate strategy foster 
                collaborative thinking to further the overall value proposition. 
                Organically grow the holistic world view of disruptive innovation via 
                workplace diversity and empowerment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bring to the table win-win survival strategies to ensure proactive 
                domination. At the end of the day, going forward, a new normal that 
                has evolved from generation X is on the runway heading towards a 
                streamlined cloud solution. User generated content in real-time will 
                have multiple touchpoints for offshoring.
              </p>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="border-2  border-gray-900 rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex hover:cursor-pointer hover:bg-black items-center gap-4 p-6 text-left bg-white hover:bg-gray-600/90 transition-colors"
                  >
                    <span className="text-2xl font-bold flex-shrink-0">
                      {openItems.includes(index) ? '−' : '+'}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </button>
                  
                  {/* Expandable Content (Optional) */}
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 pt-2 bg-white">
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;