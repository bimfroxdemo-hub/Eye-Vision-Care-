import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/Image/logo.png";
import { Menu, X, Phone, Eye, ChevronRight, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/eye-knowledge", label: "Eye Knowledge" },
    { path: "/contact", label: "Contact" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div
        className={`hidden lg:block w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 fixed top-0 left-0 z-50 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
        style={{ position: "fixed" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300 text-xs">
              <Clock size={12} className="text-teal-400" />
              <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-300 text-xs">
              <MapPin size={12} className="text-teal-400" />
              <span>Omkar Plaza, Bhestan, Surat</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919763534348"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-xs"
            >
              <Phone size={12} />
              <span>+91 9763534348</span>
            </a>
            <div className="w-px h-4 bg-gray-600"></div>
            <a
              href="https://wa.me/919763534348"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-xs"
            >
              <FaWhatsapp size={12} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full fixed left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "lg:top-[36px] top-0 bg-white/80 backdrop-blur-md shadow-sm"
        }`}
        style={{ position: "fixed" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group relative">
              <img
                src={logo}
                alt="Eye Vision Care"
                className="h-9 sm:h-10 md:h-12 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <li key={item.path} className="relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-3 xl:px-4 py-2 block text-sm font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? "text-teal-600 bg-teal-50"
                          : "text-gray-700 hover:text-teal-600 hover:bg-teal-50/50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {/* Active Bottom Line - No layoutId */}
                        {isActive && (
                          <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Phone Number - Desktop */}
              <a
                href="tel:+919763534348"
                className="hidden xl:flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <Phone size={14} className="text-teal-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium leading-none">
                    Call Us
                  </span>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-teal-600 transition-colors leading-tight">
                    +91 9763534348
                  </span>
                </div>
              </a>

              {/* Divider */}
              <div className="hidden xl:block w-px h-8 bg-gray-200"></div>

              {/* Book Button - Desktop */}
              <Link to="/contact" className="hidden md:block">
                <button className="group relative bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-5 lg:px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden flex items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <Eye size={16} className="relative" />
                  <span className="relative">Book Consultation</span>
                </button>
              </Link>

              {/* WhatsApp - Desktop */}
              <a
                href="https://wa.me/919763534348"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-10 h-10 bg-green-500 hover:bg-green-600 rounded-xl items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-teal-50 rounded-xl flex items-center justify-center text-gray-700 hover:text-teal-600 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              style={{ position: "fixed" }}
            />

            {/* Side Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-[85%] sm:w-[75%] md:w-[60%] h-full bg-white z-50 lg:hidden shadow-2xl overflow-y-auto"
              style={{ position: "fixed" }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
                <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <img src={logo} alt="Eye Vision Care" className="h-9 sm:h-10 w-auto object-contain" />
                </NavLink>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="p-5 sm:p-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group ${
                          isActive
                            ? "bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-600 border border-teal-200"
                            : "text-gray-700 hover:bg-gray-50 border border-transparent"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all ${
                                isActive
                                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                                  : "bg-gray-100 text-gray-500 group-hover:bg-teal-50 group-hover:text-teal-600"
                              }`}
                            >
                              <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
                            </div>
                            <span className="text-sm sm:text-base font-bold">{item.label}</span>
                          </div>
                          <ChevronRight
                            size={16}
                            className={`sm:w-[18px] sm:h-[18px] transition-all ${
                              isActive
                                ? "text-teal-500 translate-x-1"
                                : "text-gray-300 group-hover:text-teal-400 group-hover:translate-x-1"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA Section */}
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4 border-t border-gray-100">
                <motion.div custom={navItems.length} variants={menuItemVariants} initial="closed" animate="open">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full group relative bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <Eye size={18} className="relative" />
                      <span className="relative">Book Consultation</span>
                      <ArrowRight size={18} className="relative" />
                    </button>
                  </Link>
                </motion.div>

                <motion.div custom={navItems.length + 1} variants={menuItemVariants} initial="closed" animate="open">
                  <a
                    href="https://wa.me/919763534348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp size={20} />
                    Chat on WhatsApp
                  </a>
                </motion.div>

                <motion.div custom={navItems.length + 2} variants={menuItemVariants} initial="closed" animate="open">
                  <a
                    href="tel:+919763534348"
                    className="w-full bg-gray-100 text-gray-700 px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                  >
                    <Phone size={18} />
                    Call: +91 9763534348
                  </a>
                </motion.div>
              </div>

              {/* Mobile Footer Info */}
              <motion.div
                custom={navItems.length + 3}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                className="p-5 sm:p-6 border-t border-gray-100"
              >
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-teal-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={14} className="text-teal-500" />
                    <span className="text-xs sm:text-sm font-bold text-gray-700">Working Hours</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">Monday - Sunday</p>
                  <p className="text-sm sm:text-base font-bold text-teal-600">9:00 AM - 10:00 PM</p>

                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-teal-100">
                    <MapPin size={14} className="text-teal-500" />
                    <span className="text-xs sm:text-sm text-gray-600">Omkar Plaza, Bhestan, Surat</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp - Mobile Only */}
      <a
        href="https://wa.me/919763534348"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl z-40 md:hidden transition-colors"
        style={{ position: "fixed" }}
      >
        <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </a>
    </>
  );
};

export default Navbar;