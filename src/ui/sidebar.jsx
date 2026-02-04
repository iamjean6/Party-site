import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HiOutlineX,
  HiHome,
  HiInformationCircle,
  HiCalendar,
  HiClipboardList,
  HiUserAdd,
  HiPhone,
  HiCamera,
  HiClock,
  HiUser,
} from "react-icons/hi";
import { FcMoneyTransfer } from "react-icons/fc";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-close sidebar on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Scroll to about section on home
  const goToAbout = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 uppercase text-lg md:text-3xl font-semibold
     transition-colors duration-300
     hover:text-green-300 ${
       isActive ? "text-green-400" : "text-white"
     }`;

  return (
    <>
      {/* Hamburger button */}
      <div className="fixed top-1 right-0 z-50">
        <div className=" p-2">
          <GiHamburgerMenu
            onClick={() => setIsMenuOpen(true)}
            className="text-black text-6xl p-2 cursor-pointer hover:text-blue-700 transition-colors duration-300"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 md:w-96 z-40
        bg-black/90 backdrop-blur-sm rounded-r-lg
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <HiOutlineX
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-white cursor-pointer hover:text-green-300 transition-colors duration-300"
        />

        {/* Nav links */}
        <div className="flex flex-col gap-6 px-10 py-6 mt-16">
          <NavLink to="/" className={linkClass}>
            <HiHome /> Home
          </NavLink>

        <NavLink to="/members" className={linkClass}>
            <HiUser /> Members
          </NavLink>
          <NavLink to="/events" className={linkClass}>
            <HiCalendar /> Events
          </NavLink>

          <NavLink to="/agenda" className={linkClass}>
            <HiClipboardList /> Agenda
          </NavLink>

          <NavLink to="/registration" className={linkClass}>
            <HiUserAdd /> Registration
          </NavLink>

          <NavLink to="/counter" className={linkClass}>
            <HiClock /> Campaign
          </NavLink>

          <NavLink to="/gallery" className={linkClass}>
            <HiCamera /> Gallery
          </NavLink>

          <NavLink to="/contacts" className={linkClass}>
            <HiPhone /> Contact Us
          </NavLink>
           <NavLink to="/contribution" className={linkClass}>
            <FcMoneyTransfer /> Donate
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
