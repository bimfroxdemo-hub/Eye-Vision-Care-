import React, { useEffect, useState } from "react";
import heroImg from "../Image/heroimg.png";
import { Eye, Star, Users, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const items = [
    "EYE VISION CARE ",
    "Comprehensive Eye Exams",
    "Cataract Surgery", 
    "Dry Eye Treatment",
    "Optical Boutique",
  ];

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Patients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Rating" },
    { icon: Calendar, number: "24/7", label: "Emergency Care" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '300ms'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* HERO AREA */}
      <div className="relative min-h-screen flex items-center">

        {/* Enhanced Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e6f7f8] via-[#f0fffe] to-[#fff4d6] z-0"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-5 z-5"
             style={{
               backgroundImage: `radial-gradient(circle at 20px 20px, #000 2px, transparent 2px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        {/* Container */}
        <div className="relative w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10 pt-28 md:pt-20 pb-16">

          {/* LEFT CONTENT */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="text-teal-600 text-sm md:text-base font-medium">Welcome to Eye Vision Care</span>
            </div>

            {/* Main Heading with Animation */}
            <h1 className={`text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-gray-900 leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                style={{transitionDelay: '200ms'}}>
              Advanced Eye <br className="hidden sm:block" />
              <span className="relative">
                Care for
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-transparent"></div>
              </span>
            </h1>

            {/* Gradient Text */}
            <h2 className={`text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-extrabold mt-2 bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500 bg-clip-text text-transparent leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: '400ms'}}>
              Clearer Vision
            </h2>

            {/* Description */}
            <p className={`text-gray-600 text-lg mt-6 max-w-md mx-auto md:mx-0 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{transitionDelay: '500ms'}}>
              Experience world-class eye care with cutting-edge technology and compassionate treatment from our expert team.
            </p>

            {/* Enhanced Buttons */}
            <div className={`flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{transitionDelay: '700ms'}}>
              <Link to="/services">
                <button className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base font-medium">
                  <span className="flex items-center gap-2">
                    View All Services
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </Link>

              <Link to="/about#team">
                <button className="group border-2 border-gray-300 px-8 py-4 rounded-full hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 text-sm md:text-base font-medium bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <span className="flex items-center gap-2 text-gray-700 group-hover:text-teal-600">
                    Meet Our Team
                    <Users className="w-4 h-4" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{transitionDelay: '900ms'}}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-teal-500 group-hover:text-teal-600 transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`w-full md:w-1/2 flex justify-center relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
               style={{transitionDelay: '300ms'}}>

            {/* Enhanced Background Effects */}
            <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-r from-teal-400 via-green-300 to-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Additional Glow Effect */}
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse" 
                 style={{animationDelay: '1000ms'}}></div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-teal-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '500ms'}}></div>
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>

            {/* Image Container */}
            <div className="relative group">
              <img
                src={heroImg}
                alt="Eye Care"
                className="relative w-[80%] sm:w-[70%] md:w-full max-w-md md:max-w-lg object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
              
              {/* Image Border Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </div>
          </div>

        </div>
      </div>

      {/* ENHANCED TICKER SECTION */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden relative">
        
        {/* Ticker Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-yellow-500/10"></div>
        
        <div className="flex whitespace-nowrap py-4 w-max relative ticker-scroll">
          {[...items, ...items, ...items, ...items].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-10 mx-10 text-white text-sm md:text-base font-medium hover:text-teal-400 transition-colors duration-300 group"
            >
              <Eye className="text-teal-400 group-hover:text-yellow-400 transition-colors duration-300 group-hover:scale-110 transform" size={20} />
              <span className="group-hover:text-teal-300 transition-colors duration-300">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Animation CSS */}
      <style>
        {`
          .ticker-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .ticker-scroll:hover {
            animation-play-state: paused;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </section>
  );
};

export default Hero;