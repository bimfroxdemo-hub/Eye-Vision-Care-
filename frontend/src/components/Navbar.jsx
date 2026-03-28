import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/src/Image/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ FIXED FUNCTION
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-teal-500 font-semibold"
      : "hover:text-teal-500 transition";

  return (
    <nav className="w-full py-4 bg-white/70 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">

      <div className="w-[90%] md:w-[85%] mx-auto flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-4">

          <span className="text-sm text-gray-600 hidden lg:block">
            +91 9763534348
          </span>

          {/* <button className="hidden sm:block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-full transition shadow text-sm md:text-base">
            Book Consultation
          </button> */}

          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-teal/30 hover:-translate-y-0.5">
                Book Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute w-full left-0 top-full transition-all duration-300 ${isOpen ? "max-h-[400px] py-6" : "max-h-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col items-center gap-6 text-gray-700 font-medium">
          <NavLink onClick={() => setIsOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>

          <Link to="/contact">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full">
              Book Consultation
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;