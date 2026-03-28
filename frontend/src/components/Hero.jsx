import React from "react";
import heroImg from "/src/Image/heroimg.png";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const items = [
    "Laser-Assisted Surgeries",
    "Sterile & Safe Surgical Environment",
    "Advanced Retina Care",
    "24/7 Emergency Eye Services",
    "Experienced Eye Specialists",
  ];

  return (
    <section className="relative w-full overflow-hidden">

      {/* HERO AREA */}
      <div className="relative min-h-screen flex items-center">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e6f7f8] to-[#fff4d6] z-0"></div>

        {/* Container */}
        <div className="relative w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10 pt-28 md:pt-20 pb-16">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <p className="text-teal-500 mb-4 flex justify-center md:justify-start items-center gap-2 text-sm md:text-base">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-teal-500 rounded-full"></span>
              Welcome to Eye Vision Care
            </p>

            <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-gray-900 leading-tight">
              Advanced Eye <br className="hidden sm:block" />
              Care for
            </h1>

            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-extrabold mt-2 bg-gradient-to-r from-teal-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Clearer Vision
            </h2>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
              <Link to="/services">
                <button className="bg-teal-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-teal-600 transition shadow-md text-sm md:text-base">
                  View All Services
                </button>
              </Link>

              <Link to="/about#team">
                <button className="border border-gray-300 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition text-sm md:text-base">
                  Meet Our Team
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center relative">

            <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-r from-teal-400 via-green-300 to-yellow-300 rounded-full blur-3xl opacity-40"></div>

            <img
              src={heroImg}
              alt="Eye Care"
              className="relative w-[80%] sm:w-[70%] md:w-full max-w-md md:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>

      {/* TICKER SECTION */}
      <div className="w-full bg-black overflow-hidden">

        <div className="flex whitespace-nowrap animate-scroll py-3 w-max">

          {[...items, ...items, ...items, ...items].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-10 mx-10 text-white text-sm md:text-base font-medium"
            >
              <Eye className="text-teal-400" size={18} />
              {text}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Hero;