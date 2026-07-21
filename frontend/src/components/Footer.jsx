import React from "react";
import logo from "/src/Image/logo2.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear(); // ✅ Auto Year

  return (
    <footer className="w-full bg-black text-white pt-16 pb-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-teal-500 opacity-20 blur-3xl"></div>

      {/* Container */}
      <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">

        {/* LEFT */}
        <div>
          <img src={logo} alt="logo" className="h-12 mb-4" />

          <p className="text-gray-400 text-sm leading-relaxed">
           We are dedicated to provide excellent vision care services.
          </p>

          <div className="mt-6 bg-teal-900/30 p-4 rounded-lg">
            <p className="text-teal-400 font-semibold">We Are Available !!</p>
            <p className="text-gray-300 text-sm mt-1">
              Monday - Sunday : 9:00 AM to 10:00 PM
            </p>
          </div>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="font-semibold mb-4">Quick Access</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/about#story" className="block w-full">› Our Story</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/contact#contact" className="block w-full">› Inquery</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/about#team" className="block w-full">› Team</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/contact#locations" className="block w-full">› Clinics</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/services#products" className="block w-full">› Products</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        {/* <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/services#services" className="block w-full">› Cataract Evaluation</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/services#services" className="block w-full">› Pediatric Eye Care</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/services#services" className="block w-full">› LASIK Surgery</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/services#services" className="block w-full">› Glaucoma Screening</Link></li>
            <li className="hover:text-teal-400 cursor-pointer"><Link to="/services#services" className="block w-full">› Diabetic Eye Care</Link></li>
          </ul>
        </div> */}

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm">

            <p>📍 Shop No. 26, Omkar Plaza, Bhestan, Surat</p>
            <p>📧 eyevisioncaree@gmail.com</p>
            <p>📞 +91 9763534348  <br />📞 +91 9167133049</p>

          </div>

          {/* Social Icons */}
          <div className="mt-5 flex items-center gap-4">
            <a className="hover:text-[#C68A2A] transition" href="https://www.facebook.com/share/17q1nhah7T/?mibextid=wwXIfr">
              <FaFacebookF size={20} />
            </a>
            <a className="hover:text-[#C68A2A] transition" href="https://www.instagram.com/eyevisioncareofficial?igsh=MTZoOTNxOHFyZGZvYw%3D%3D&utm_source=qr">
              <FaInstagram size={20} />
            </a>
            <a className="hover:text-[#C68A2A] transition" href="https://www.youtube.com/@EyeVisioncare-j9g">
              <FaYoutube size={20} />
            </a>
            
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm relative z-10">
        © {year} EyeVisionCare. All Rights Reserved | Designed by <a href="https://bimfrox.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Bimfrox</a>
      </div>

    </footer>
  );
};

export default Footer;