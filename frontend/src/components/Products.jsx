import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Star, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <section
      id="products"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-teal-50/20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-yellow-200/15 rounded-full blur-3xl"></div>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
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
                <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
              </motion.div>
              Optical Boutique
            </motion.span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Premium{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                  Eyewear & Lenses
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
              className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed"
            >
              Discover our curated collection of premium eyewear designed for
              style, comfort, and crystal-clear vision.
            </motion.p>
          </motion.div>

          {/* Desktop Shop All Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Link to="/services#products">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-bold text-sm border border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-md"
              >
                Shop All Products
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
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

                {/* Product Image */}
                <div className="relative overflow-hidden m-3 sm:m-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-lg px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg border border-white/50"
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </motion.div>

                  {/* Rating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                    }}
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-yellow-400/90 backdrop-blur-lg px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1"
                  >
                    <Star
                      size={10}
                      className="sm:w-3 sm:h-3 text-gray-900"
                      fill="currentColor"
                    />
                    <span className="text-[10px] sm:text-xs font-bold text-gray-900">
                      {product.rating}
                    </span>
                  </motion.div>

                  {/* Quick View Button - On Hover */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/90 backdrop-blur-lg text-gray-900 px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shadow-lg border border-white/50 flex items-center gap-1.5 sm:gap-2 hover:bg-white transition-colors"
                    >
                      <Eye size={14} className="sm:w-4 sm:h-4" />
                      Quick View
                    </motion.button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 sm:p-5 md:p-6 pt-1 sm:pt-2 flex flex-col flex-grow relative">
                  {/* Product Name */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-2 group-hover:text-gray-600 transition-colors">
                    {product.description}
                  </p>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={`sm:w-3 sm:h-3 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-200 fill-current"
                          }`}
                        />
                      ))}
                      <span className="text-[10px] sm:text-xs text-gray-500 ml-1 font-medium">
                        ({product.rating})
                      </span>
                    </div>

                    {/* View Details */}
                    <motion.a
                      href="#"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-1 text-teal-600 font-bold text-[10px] sm:text-xs group/link"
                    >
                      Details
                      <ArrowRight
                        size={12}
                        className="sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-0.5 transition-transform"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Shop All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center md:hidden"
        >
          <Link to="/services#products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg"
            >
              Shop All Products
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 sm:mt-14 md:mt-16"
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
                    <Sparkles
                      size={18}
                      className="sm:w-5 sm:h-5 text-yellow-400"
                    />
                  </motion.div>
                  <span className="text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Special Offer
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2">
                  Get Your Perfect Eyewear Today
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg">
                  Visit our optical boutique for expert fitting and personalized
                  recommendations from our specialists.
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
                    <span className="relative">Visit Boutique</span>
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

                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Browse Catalog
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}