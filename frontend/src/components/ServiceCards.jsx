import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services({ services }) {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-yellow-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[500px] h-64 md:h-[500px] bg-emerald-100/10 rounded-full blur-3xl"></div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-teal-400/40 rounded-full hidden md:block"
            style={{
              left: `${8 + i * 12}%`,
              top: `${10 + (i % 4) * 25}%`,
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
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
            Our Specializations
          </motion.span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
            Advanced Eye Care{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                Treatments
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
            We combine medical expertise with cutting-edge technology to provide
            unparalleled care for your vision health and wellness.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-500">
                {/* Soft Gradient Background */}
                <div
                  className={`absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-bl ${service.color} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>

                {/* Image Container */}
                <div className="relative overflow-hidden m-3 sm:m-4 rounded-xl sm:rounded-2xl">
                  <div className="aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                  {/* Floating Badge on Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                    }}
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-lg px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg border border-white/50"
                  >
                    <div className="flex items-center gap-1">
                      <Eye
                        size={12}
                        className="sm:w-3.5 sm:h-3.5 text-teal-500"
                      />
                      <span className="text-[10px] sm:text-xs font-bold text-gray-900">
                        Specialized
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-5 md:p-6 pt-2 sm:pt-3">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3 group-hover:text-gray-600 transition-colors">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center justify-between">
                    <motion.a
                      href="#"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-teal-600 font-bold text-xs sm:text-sm group/link"
                    >
                      Learn More
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight
                          size={14}
                          className="sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform"
                        />
                      </motion.div>
                    </motion.a>

                    {/* Step Number */}
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 group-hover:text-teal-100 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Top Gradient Strip */}
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 sm:mt-14 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-teal-100 shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-3">
              Need Expert Eye Care Consultation?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Our specialists are ready to help you with personalized treatment
              plans using the latest technology in eye care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact#contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-xl relative overflow-hidden"
                >
                  {/* Button shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative">Book Consultation</span>
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

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm hover:bg-teal-50 transition-all duration-300 shadow-lg border border-teal-200"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}