import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import eyeImg from "../Image/eyecheckup.jpeg";

const Appointment = ({ steps }) => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="absolute w-2 h-2 bg-teal-400/40 rounded-full hidden md:block"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="w-[92%] sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mb-10 sm:mb-14 md:mb-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4 sm:mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Calendar size={14} className="sm:w-4 sm:h-4" />
              </motion.div>
              Simple Booking Process
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
            >
              How to Book Your{" "}
              <br className="hidden sm:block" />
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Eye Vision Test Appointment
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-emerald-500 origin-left rounded-full"
                />
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-xl leading-relaxed"
            >
              Book your appointment in just a few simple steps and experience world-class eye care services.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full sm:w-[80%] md:w-[60%] lg:w-[320px] xl:w-[380px] mx-auto lg:mx-0"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              {/* Image Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <img
                src={eyeImg}
                alt="Eye Checkup"
                className="relative w-full h-36 sm:h-44 md:h-48 object-cover rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white/50"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-xl"
              >
                📅 Book Now
              </motion.div>

              {/* Top Right Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-bold text-[10px] sm:text-xs shadow-lg"
              >
                ⚡ Quick & Easy
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* CONNECTION LINE - Desktop Only */}
        <div className="hidden md:block relative mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-300 via-emerald-300 to-yellow-300 origin-left"
          />
          <div className="flex justify-between px-[5%]">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                className="w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full border-4 border-white shadow-lg relative z-10"
              />
            ))}
          </div>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className={`relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg border transition-all duration-300 group overflow-hidden ${
                index === 0
                  ? "border-teal-200 hover:border-teal-300"
                  : index === 1
                  ? "border-emerald-200 hover:border-emerald-300"
                  : index === 2
                  ? "border-yellow-200 hover:border-yellow-300"
                  : "border-orange-200 hover:border-orange-300"
              }`}
            >

              {/* Card Top Gradient Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                index === 0
                  ? "bg-gradient-to-r from-teal-400 to-teal-500"
                  : index === 1
                  ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                  : index === 2
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                  : "bg-gradient-to-r from-orange-400 to-orange-500"
              }`} />

              {/* Big Number (Background) */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-5xl sm:text-6xl md:text-7xl font-black text-gray-100/80 group-hover:text-teal-100/80 transition-colors duration-300 select-none"
              >
                {step.number}
              </motion.span>

              {/* Step Number Badge */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md ${
                  index === 0
                    ? "bg-gradient-to-r from-teal-500 to-teal-600"
                    : index === 1
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                    : index === 2
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                    : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}
              >
                {index + 1}
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl mb-4 sm:mb-5 mt-6 sm:mt-8 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-teal-400 to-teal-500"
                    : index === 1
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                    : index === 2
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                    : "bg-gradient-to-r from-orange-400 to-orange-500"
                }`}
              >
                <div className="text-white">
                  {step.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-300 mb-2 sm:mb-3">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {step.desc}
              </p>

              {/* Bottom Arrow Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5 }}
                className="mt-4 sm:mt-5 flex items-center gap-2 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-xs font-bold">Learn More</span>
                <ArrowRight size={14} />
              </motion.div>

              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl sm:rounded-2xl ${
                index === 0
                  ? "bg-gradient-to-br from-teal-400 to-teal-600"
                  : index === 1
                  ? "bg-gradient-to-br from-emerald-400 to-emerald-600"
                  : index === 2
                  ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                  : "bg-gradient-to-br from-orange-400 to-orange-600"
              }`} />

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-14 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-teal-100 shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2 sm:mb-3">
              Ready to Book Your Appointment?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl mx-auto">
              Take the first step towards better vision. Our expert team is ready to provide you with the best eye care experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact#contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-xl relative overflow-hidden"
                >
                  {/* Button shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative">Book Appointment Now</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-teal-50 transition-all duration-300 shadow-lg border border-teal-200"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Appointment;