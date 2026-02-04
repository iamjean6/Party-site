import {useState} from "react";
import { TiLocationArrow } from "react-icons/ti";
import   Button from "./button";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX, HiHome, HiInformationCircle, HiCalendar, HiClipboardList, HiUserAdd, HiShoppingCart, HiPhone, HiCamera, HiClock } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { NavLink, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero = () => {
    const handleLinkClick = (hash) => {
    setIsMenuOpen(false);   // close the menu
    window.location.href = hash; // navigate to the section
};
let navigate = useNavigate();
useGSAP(()=>{
const heroSplit = new SplitText(".title, .subtitle",{
  type: "words,chars",
})
const paragraph = new SplitText(".paragraph",{
  type: "words",

})
heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));


 const tl = gsap.timeline({
    onComplete: () => {
      heroSplit.revert();
      paragraph.revert();
    },
  });

tl.from(heroSplit.chars,{ 
   opacity: 0,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,})

tl.from('.hero-img',{
    opacity:0,
    duration:0.3,
    ease: "expo.out",
    stagger:0.06,
    
})
tl.from(paragraph.words, {
  opacity: 0,
  y: 20,
  duration: 0.8,
  stagger: 0.02,
  ease: "power2.out",
});

tl.from('#learn-more',{
    stagger:'0.1s',
    y:40,
    duration:0.8,
     ease: "expo.out",
})

},["#Home"])

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div id="Home" className=" relative w-full h-dvh overflow-hidden bg-black isolate">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('img/kenya1.jpeg')",
        }}
      ></div>
       <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex items-center  h-full text-white">
       <div className="mx-auto w-full max-w-7xl px-6">
       

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
           <div className="flex flex-col justify-center h-full">
                <h1 className="text-green-400 title text-2xl font-maison md:text-4xl font-extrabold leading-tight md:leading-snug mb-2 tracking-tight">
                    LIBERAL DEMOCARTIC PARTY - KENYA
                </h1>
                <div className="flex items-center gap-3 mb-3">
                    <img 
                        src="/img/logo.jpeg" 
                        alt="LDP Logo" 
                        className="hero-img w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-300/50"
                    />
                    <h2 className=" text-blue-400/90 subtitle text-lg md:text-2xl font-semibold ">
                       Central Command Center
                    </h2>
                </div>
                <p className="paragraph mb-3 text-sm md:text-base text-gray-300 max-w-xl">
                   The Liberal Democratic Party (LDP) is a registered political party in the Republic of Kenya committed to deepening democratic governance, expanding individual freedoms, strengthening economic growth, and 
                   ensuring equitable opportunities for all citizens. The party believes in liberal democratic ideals that advance human dignity, the rule of law, accountable leadership, and inclusive governance.
                   LDP operates under the Political Parties Act (2011) and is officially registered with the Office of the Registrar of Political Parties (ORPP) in Kenya. 

                    
                </p>
            <Button
  id="learn-more"
  title="Learn More"
  leftIcon={<TiLocationArrow />}
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
  onClick={() => navigate("/agenda")}
/>
</div>
        
        </div>
       </div>
      </div>
      
    </div>
  );
};

export default Hero;
