import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ArrowRight,
  Star,
  CheckCircle,
  Eye,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Locations({ locations }) {
  return (
    <section
      id="locations"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-yellow-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[500px] h-64 md:h-[500px] bg-emerald-100/10 rounded-full blur-3xl"></div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16"
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
              <MapPin size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
            Our Branches
          </motion.span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
            Find a Clinic{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                Near You
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-yellow-500 origin-left rounded-full"
              />
            </span>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Conveniently located across the city to provide you with
            accessible, world-class eye care services.
          </motion.p>

          {/* Location Count Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full border border-gray-200 shadow-sm"
          >
            <Sparkles
              size={14}
              className="sm:w-4 sm:h-4 text-yellow-500"
            />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">
              {locations.length} Clinics across the city
            </span>
          </motion.div>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                {/* Top Gradient Strip */}
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

                {/* Image Section */}
                <div className="relative overflow-hidden m-3 sm:m-4 rounded-xl sm:rounded-2xl">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                  {/* Main Center Badge */}
                  {location.isMain && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                      }}
                      className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1 sm:gap-1.5"
                    >
                      <Star
                        size={10}
                        className="sm:w-3 sm:h-3 fill-current"
                      />
                      Main Center
                    </motion.div>
                  )}

                  {/* Open Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-500/90 backdrop-blur-lg px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
                    <span className="text-[10px] sm:text-xs font-bold text-white">
                      Open Now
                    </span>
                  </motion.div>

                  {/* Location Name */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight drop-shadow-lg">
                      {location.name}
                    </h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-4 sm:p-5 md:p-6 pt-1 sm:pt-2 flex flex-col flex-grow relative">
                  {/* Info Items */}
                  <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
                    {/* Address */}
                    <motion.li
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 sm:gap-3 group/item"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-md flex-shrink-0 mt-0.5 group-hover/item:shadow-lg transition-all">
                        <MapPin size={14} className="sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                          Address
                        </p>
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                          {location.address}
                        </span>
                      </div>
                    </motion.li>

                    {/* Phone */}
                    <motion.li
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 sm:gap-3 group/item"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-yellow-500 flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover/item:shadow-lg transition-all">
                        <Phone size={14} className="sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                          Phone
                        </p>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-gray-700 text-xs sm:text-sm font-bold hover:text-teal-600 transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </motion.li>

                    {/* Hours */}
                    <motion.li
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 sm:gap-3 group/item"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover/item:shadow-lg transition-all">
                        <Clock size={14} className="sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                          Working Hours
                        </p>
                        <span className="text-gray-700 text-xs sm:text-sm font-medium">
                          {location.hours}
                        </span>
                      </div>
                    </motion.li>
                  </ul>

                  {/* Bottom Action Bar */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto gap-3">
                    {/* Get Directions */}
                    <a
                      href={location.getDirection}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full group/btn inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Button shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                        <Navigation
                          size={14}
                          className="sm:w-4 sm:h-4 relative"
                        />
                        <span className="relative">Get Directions</span>
                      </motion.button>
                    </a>

                    {/* Call Button */}
                    <a href={`tel:${location.phone}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border-2 border-teal-200 flex items-center justify-center text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0"
                      >
                        <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {[
            {
              number: `${locations.length}+`,
              label: "Clinic Locations",
              icon: MapPin,
            },
            { number: "50K+", label: "Happy Patients", icon: Star },
            { number: "24/7", label: "Emergency Care", icon: Clock },
            { number: "4.9", label: "Patient Rating", icon: Eye },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -3 }}
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-center group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white group-hover:shadow-lg transition-all">
                <stat.icon size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12"
        >
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* CTA Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2 sm:mb-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Navigation
                      size={18}
                      className="sm:w-5 sm:h-5 text-teal-400"
                    />
                  </motion.div>
                  <span className="text-teal-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Visit Us Today
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2">
                  Can't Find a Clinic Near You?
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg">
                  Contact us and we'll help you find the nearest Eye Vision Care
                  clinic or schedule a virtual consultation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact#contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm transition-all duration-300 shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative">Contact Us</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <ArrowRight
                        size={16}
                        className="sm:w-[18px] sm:h-[18px]"
                      />
                    </motion.div>
                  </motion.button>
                </Link>

                <a href="tel:+919763534348">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Phone size={16} />
                    Call Now
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}