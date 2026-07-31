import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Maximize2, Eye, Sparkles } from "lucide-react";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <section
        id="gallery"
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
                <Camera size={14} className="sm:w-4 sm:h-4" />
              </motion.div>
              Clinic Tour
            </motion.span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
              State-of-the-Art{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                  Facilities
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
              Designed for your comfort and equipped with the latest in optical
              and surgical technology for world-class eye care.
            </motion.p>

            {/* Image Count Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full border border-gray-200 shadow-sm"
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                {images.length} Photos from our clinic
              </span>
            </motion.div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 ${img.className}`}
              >
                {/* Image */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Top Right Zoom Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-lg rounded-lg sm:rounded-xl flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-colors">
                    <Maximize2 size={14} className="sm:w-4 sm:h-4" />
                  </div>
                </motion.div>

                {/* Image Number Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold shadow-lg">
                    {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-xl border-t border-white/20 p-3 sm:p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-sm sm:text-base md:text-lg font-bold truncate">
                          {img.title}
                        </h3>
                        <p className="text-white/60 text-[10px] sm:text-xs mt-0.5">
                          Eye Vision Care Clinic
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Camera size={14} className="sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Play/View Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white border-2 border-white/40 shadow-xl"
                  >
                    <ZoomIn size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {[
              { number: "7+", label: "Clinic Locations", icon: Eye },
              { number: "Latest", label: "Technology", icon: Sparkles },
              { number: "Modern", label: "Infrastructure", icon: Camera },
              { number: "24/7", label: "Emergency Care", icon: Eye },
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
        </div>
      </section>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={closeLightbox}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20 z-50"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/10 backdrop-blur-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-bold border border-white/20 z-50">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20 z-50"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20 z-50"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.button>

            {/* Main Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Image Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 sm:mt-4 bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Camera size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/60 text-[10px] sm:text-xs">
                      Eye Vision Care • Premium Clinic
                    </p>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                  {images.slice(0, 6).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setSelectedImage(images[idx]);
                      }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                        currentIndex === idx
                          ? "border-teal-500 scale-110"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                  {images.length > 6 && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold border-2 border-white/20 flex-shrink-0">
                      +{images.length - 6}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}