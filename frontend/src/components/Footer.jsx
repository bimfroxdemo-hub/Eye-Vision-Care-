import React from "react";
import logo from "../Image/logo2.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, MapPin, Mail, Phone, Clock, Star } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20 pb-6 relative overflow-hidden">

      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Glow Effects */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-yellow-400 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-[-10%] bottom-[-10%] w-96 h-96 bg-teal-500 blur-3xl"
        />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 2px, transparent 2px)`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      {/* Premium Single Line Banner */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Banner Text - Single Line */}
          <motion.h1 
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] font-black leading-none tracking-tight select-none whitespace-nowrap"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(20,184,166,0.08) 25%, rgba(16,185,129,0.08) 50%, rgba(251,191,36,0.08) 75%, rgba(255,255,255,0.03) 100%)",
              backgroundSize: "400% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EYE VISION CARE
          </motion.h1>
          
          {/* Animated Underline */}
          <motion.div
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gradient-to-r from-teal-500 via-emerald-400 to-yellow-500 rounded-full"
          />
          
          {/* Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute w-4 h-4 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="w-[92%] sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >

          {/* BRAND SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Enhanced Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="relative">
                <img src={logo} alt="Eye Vision Care" className="h-16 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 blur-lg opacity-20"></div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-teal-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
                  Eye Vision Care
                </h3>
                <p className="text-gray-400 text-sm font-medium">Excellence in Vision • Since 2010</p>
              </div>
            </motion.div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              We are dedicated to providing world-class vision care services with cutting-edge technology, 
              advanced diagnostic equipment, and compassionate treatment for every patient who walks through our doors.
            </p>

            {/* Premium Availability Card */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)"
              }}
              className="bg-gradient-to-br from-teal-900/40 via-emerald-900/40 to-teal-800/40 backdrop-blur-sm p-6 rounded-2xl border border-teal-600/30 shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Clock size={24} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="text-teal-400 font-black text-xl mb-1">We Are Available!</h4>
                  <p className="text-gray-300 font-medium">
                    Monday - Sunday
                  </p>
                  <p className="text-white font-bold text-lg">
                    9:00 AM to 10:00 PM
                  </p>
                </div>
              </div>
              
              {/* Enhanced Rating Section */}
              <div className="flex items-center justify-between pt-4 border-t border-teal-700/40">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                      >
                        <Star size={18} className="text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-white font-bold">4.9/5</span>
                </div>
                <span className="text-gray-300 text-sm font-medium">50,000+ Happy Patients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* QUICK ACCESS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-black mb-6 text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Eye size={16} />
              </div>
              Quick Access
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Our Story", link: "/about#story" },
                { text: "Contact & Inquiry", link: "/contact#contact" },
                { text: "Meet Our Team", link: "/about#team" },
                { text: "Our Clinics", link: "/contact#locations" },
                { text: "Products & Services", link: "/services#products" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <Link 
                    to={item.link}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 text-sm font-medium group-hover:text-teal-400 p-2 rounded-lg hover:bg-white/5"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="w-2 h-2 bg-teal-400 rounded-full opacity-60 group-hover:opacity-100"
                    />
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-black mb-6 text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <Phone size={16} />
              </div>
              Contact Us
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-teal-400/30"
              >
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Our Location</p>
                  <p className="text-gray-300 text-sm">
                    Shop No. 26, Omkar Plaza, Bhestan, Surat
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/30"
              >
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Email Us</p>
                  <a href="mailto:eyevisioncaree@gmail.com" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                    eyevisioncaree@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30"
              >
                <Phone size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm mb-2">Call Us Now</p>
                  <div className="text-gray-300 text-sm space-y-1">
                    <a href="tel:+919763534348" className="block hover:text-yellow-400 transition-colors font-medium">
                      +91 9763534348
                    </a>
                    <a href="tel:+919167133049" className="block hover:text-yellow-400 transition-colors font-medium">
                      +91 9167133049
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Social Icons */}
            <div className="mt-8">
              <h4 className="text-gray-400 text-sm font-bold mb-4">Connect With Us</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaFacebookF, link: "https://www.facebook.com/share/17q1nhah7T/?mibextid=wwXIfr", color: "hover:bg-blue-600", name: "Facebook" },
                  { icon: FaInstagram, link: "https://www.instagram.com/eyevisioncareofficial?igsh=MTZoOTNxOHFyZGZvYw%3D%3D&utm_source=qr", color: "hover:bg-pink-600", name: "Instagram" },
                  { icon: FaYoutube, link: "https://www.youtube.com/@EyeVisioncare-j9g", color: "hover:bg-red-600", name: "YouTube" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                    className={`w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${social.color} border border-white/20 hover:border-white/50 shadow-lg hover:shadow-2xl`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Premium Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left font-medium">
              © {year} EyeVisionCare. All Rights Reserved • Trusted Eye Care Since 2010
            </div>
            
            {/* Designer Credit */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              Crafted with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              {" "}by{" "}
              <motion.a
                href="https://bimfrox.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-teal-400 hover:text-teal-300 font-black transition-all duration-300 inline-flex items-center gap-2"
              >
                Bimfrox
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;