import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Seo from "./Seo";
import {
  Eye,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Heart,
  Info,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  eyeParts,
  visionSteps,
  eyeConditions,
  eyeCareTips,
  eyeFacts,
} from "../data/eyeData";

// ==================== HERO SECTION ====================
const EyeHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Eye-shaped gradient */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-teal-500/20"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-emerald-500/15"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] rounded-full bg-teal-500/10 blur-xl"
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400/50 rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl mb-4 sm:mb-6">
            <Eye size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
        >
          The Human{" "}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
            Eye
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed"
        >
          Discover the incredible complexity of the human eye — nature's most
          sophisticated optical instrument. Learn how your eyes work, their
          amazing parts, and how to keep them healthy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#anatomy">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative">Explore Eye Anatomy</span>
              <ChevronDown size={18} className="relative" />
            </motion.button>
          </a>

          <a href="#how-vision-works">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              How Vision Works
            </motion.button>
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-14 max-w-3xl mx-auto"
        >
          {[
            { number: "2M+", label: "Working Parts" },
            { number: "576", label: "Megapixels" },
            { number: "10M", label: "Colors Detected" },
            { number: "120M", label: "Rod Cells" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10 text-center"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-black text-teal-400">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// ==================== EYE ANATOMY SECTION ====================
const EyeAnatomy = () => {
  const [selectedPart, setSelectedPart] = useState(0);

  return (
    <section
      id="anatomy"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <BookOpen size={14} className="sm:w-4 sm:h-4" />
            Eye Anatomy
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Parts of the{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
              Human Eye
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
            Explore each part of the eye and understand how they work together
            to give you the gift of sight
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left - Parts List */}
          <div className="lg:col-span-1 space-y-2 sm:space-y-3 order-2 lg:order-1">
            {eyeParts.map((part, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedPart(index)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center gap-3 group ${
                  selectedPart === index
                    ? "bg-white shadow-xl border-2 border-teal-200"
                    : "bg-white/50 border border-gray-100 hover:bg-white hover:shadow-md"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${part.color} shadow-lg transition-all ${
                    selectedPart === index ? "scale-110" : "group-hover:scale-105"
                  }`}
                >
                  <part.icon size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-bold text-sm sm:text-base truncate ${
                      selectedPart === index ? "text-teal-600" : "text-gray-900"
                    }`}
                  >
                    {part.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                    {part.hindi} • {part.position}
                  </p>
                </div>
                <ArrowRight
                  size={14}
                  className={`sm:w-4 sm:h-4 flex-shrink-0 transition-all ${
                    selectedPart === index
                      ? "text-teal-500 translate-x-1"
                      : "text-gray-300"
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Right - Detail Card */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-full"
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-r ${eyeParts[selectedPart].color} p-5 sm:p-6 md:p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                  <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      {React.createElement(eyeParts[selectedPart].icon, {
                        size: 28,
                        className: "sm:w-8 sm:h-8 md:w-10 md:h-10",
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1">
                        {eyeParts[selectedPart].name}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        {eyeParts[selectedPart].hindi} •{" "}
                        {eyeParts[selectedPart].position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <Info size={16} className="sm:w-[18px] sm:h-[18px] text-teal-500" />
                      What is it?
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {eyeParts[selectedPart].description}
                    </p>
                  </div>

                  {/* Function */}
                  <div
                    className={`${eyeParts[selectedPart].bgColor} p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${eyeParts[selectedPart].borderColor}`}
                  >
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] text-teal-500" />
                      Function
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {eyeParts[selectedPart].function}
                    </p>
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-yellow-200">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                      <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-500" />
                      Fun Fact
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                      "{eyeParts[selectedPart].funFact}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== HOW VISION WORKS ====================
const HowVisionWorks = () => {
  return (
    <section
      id="how-vision-works"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <Eye size={14} className="sm:w-4 sm:h-4" />
            Vision Process
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            How{" "}
            <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              Vision Works
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
            The journey of light from object to perception — a 6-step miracle
            that happens in milliseconds
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {visionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-teal-500/30 hover:bg-white/10 transition-all duration-500 h-full">
                {/* Step Number */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-4xl sm:text-5xl md:text-6xl font-black text-white/5 group-hover:text-teal-500/10 transition-colors select-none">
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-4 sm:mb-6 shadow-xl`}
                >
                  <step.icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>

                {/* Connection Arrow */}
                {index < visionSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight size={20} className="text-teal-500/50" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== EYE CONDITIONS ====================
const EyeConditions = () => {
  const [expandedCondition, setExpandedCondition] = useState(null);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-red-50/20 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <AlertTriangle size={14} className="sm:w-4 sm:h-4" />
            Common Conditions
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Common{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Eye Conditions
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
            Understanding common eye problems helps in early detection and
            treatment
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {eyeConditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div
                className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full ${
                  expandedCondition === index ? "border-red-300" : ""
                }`}
              >
                {/* Card Header */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl">{condition.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                        {condition.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                        {condition.hindi}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {condition.description}
                  </p>

                  {/* Toggle Button */}
                  <button
                    onClick={() =>
                      setExpandedCondition(
                        expandedCondition === index ? null : index
                      )
                    }
                    className="text-red-500 text-xs sm:text-sm font-bold flex items-center gap-1 hover:text-red-600 transition-colors"
                  >
                    {expandedCondition === index
                      ? "Show Less"
                      : "Know More"}
                    {expandedCondition === index ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedCondition === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 space-y-3 sm:space-y-4">
                        {/* Symptoms */}
                        <div className="bg-red-50 p-3 sm:p-4 rounded-xl border border-red-100">
                          <h5 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">
                            Symptoms:
                          </h5>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {condition.symptoms.map((symptom, i) => (
                              <span
                                key={i}
                                className="text-[10px] sm:text-xs bg-white px-2 sm:px-3 py-1 rounded-full text-red-600 font-medium border border-red-100"
                              >
                                {symptom}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Treatment */}
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl border border-green-100">
                          <h5 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">
                            Treatment:
                          </h5>
                          <p className="text-gray-700 text-xs sm:text-sm">
                            {condition.treatment}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== EYE CARE TIPS ====================
const EyeCareTipsSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-teal-50/30 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <Heart size={14} className="sm:w-4 sm:h-4" />
            Eye Care Tips
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Keep Your Eyes{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Healthy
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
            Simple daily habits that can protect your vision and keep your eyes
            in great condition
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {eyeCareTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Top Gradient Strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tip.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                {/* Step Number */}
                <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-4xl sm:text-5xl md:text-6xl font-black text-gray-100 group-hover:text-teal-100 transition-colors select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${tip.color} flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg`}
                >
                  <tip.icon size={22} className="sm:w-6 sm:h-6" />
                </motion.div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {tip.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== AMAZING FACTS ====================
const AmazingFacts = () => {
  const [currentFact, setCurrentFact] = useState(0);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <Lightbulb size={14} className="sm:w-4 sm:h-4" />
            Did You Know?
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Amazing{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Eye Facts
            </span>
          </h2>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {eyeFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                {/* Number */}
                <div className="text-yellow-400 font-black text-lg sm:text-xl mb-2 sm:mb-3">
                  #{index + 1}
                </div>

                {/* Fact */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow group-hover:text-white transition-colors">
                  {fact}
                </p>

                {/* Star */}
                <div className="mt-3 sm:mt-4 flex items-center gap-1">
                  <Star
                    size={12}
                    className="text-yellow-400 fill-current"
                  />
                  <Star
                    size={12}
                    className="text-yellow-400 fill-current"
                  />
                  <Star
                    size={12}
                    className="text-yellow-400 fill-current"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== BOTTOM CTA ====================
const BottomCTA = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6"
            >
              <Eye size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
              Your Eyes Deserve the Best Care
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Schedule a comprehensive eye examination with our expert team and
              take the first step towards better vision health.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl relative overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative">Book Eye Checkup</span>
                  <ArrowRight size={18} className="relative" />
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-white/20 hover:bg-white/20 transition-all"
                >
                  Our Services
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== MAIN PAGE ====================
const EyeKnowledge = () => {
  return (
    <>
      <Seo
        title="Eye Education & Vision Health Tips | Eye Vision Care"
        description="Learn about eye anatomy, vision health, common eye conditions, and practical eye care tips from Eye Vision Care serving Surat, Vesu, Bhestan, Aarni, and nearby areas."
        keywords="eye education, eye health tips, eye anatomy, vision care guide, eye knowledge Surat, common eye conditions, eye care in Bhestan"
        url="https://eyevissioncare.in/eye-knowledge"
        image="/fevicon.png"
      />
      <EyeHero />
      <EyeAnatomy />
      <HowVisionWorks />
      <EyeConditions />
      <EyeCareTipsSection />
      <AmazingFacts />
      <BottomCTA />
    </>
  );
};

export default EyeKnowledge;