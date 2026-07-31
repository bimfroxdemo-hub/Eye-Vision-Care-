import React, { useState } from "react";
import { Plus, Minus, HelpCircle, Star, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Images (replace with your own)
import img1 from "/src/Image/faq1.jpeg";
import img2 from "/src/Image/faq2.jpeg";

const faqs = [
  {
    question: "What age group do you provide eye care for?",
    answer:
      "We provide comprehensive eye care services for all age groups, from children to senior citizens. Our specialized pediatric eye care ensures proper visual development in children, while our senior care focuses on age-related conditions like cataracts and macular degeneration.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    question: "Can I book an online consultation?",
    answer:
      "Yes, we offer convenient online consultations for follow-ups and initial screenings. Our telemedicine platform allows you to connect with our specialists from the comfort of your home, making healthcare more accessible and efficient.",
    icon: "💻"
  },
  {
    question: "Do you offer complete eye checkups?",
    answer:
      "Absolutely! We provide comprehensive eye examinations including power testing, vision analysis, retinal screening, glaucoma testing, and complete ocular health assessment using state-of-the-art diagnostic equipment.",
    icon: "👁️"
  },
  {
    question: "How often should I get my eyes checked?",
    answer:
      "Regular eye checkups are recommended every 6–12 months depending on your age and existing conditions. Children and seniors may need more frequent visits, while adults with no issues can follow annual schedules.",
    icon: "📅"
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please contact our office to verify your specific coverage and benefits. We also offer flexible payment options for uninsured patients.",
    icon: "💳"
  }
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-teal-400/60 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="w-[92%] sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full shadow-lg font-bold uppercase tracking-wider mb-4"
          >
            <HelpCircle size={16} />
            Expert Answers
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Your Questions,{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Get expert answers to common questions about eye care, treatments, and our services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGES - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur-2xl opacity-20"></div>
            
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <img
                src={img1}
                alt="Eye Care FAQ"
                className="w-[75%] rounded-2xl shadow-2xl border-4 border-white/50"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-lg rounded-2xl p-3 shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm">
                    ?
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">FAQ</div>
                    <div className="text-xs text-gray-600">Expert Help</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="absolute bottom-[-30px] right-0 z-20"
            >
              <img
                src={img2}
                alt="Eye Care Team"
                className="w-[65%] rounded-2xl shadow-2xl border-4 border-white"
              />
              
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-lg rounded-xl p-2 shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-gray-900 ml-1">4.9</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-16 h-16 border-2 border-teal-300/30 rounded-full"
            />

          </motion.div>

          {/* RIGHT CONTENT - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >

            {/* Enhanced Tag */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg text-teal-600 border border-teal-100 font-bold mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle size={16} />
              </motion.div>
              Our Experts Respond
            </motion.span>

            {/* Enhanced Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight mb-8"
            >
              Frequently{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Asked Questions
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 origin-left rounded-full"
                />
              </span>
            </motion.h2>

            {/* Enhanced Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isActive = active === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 ${
                      isActive 
                        ? 'border-teal-200 shadow-xl' 
                        : 'border-gray-100 hover:border-teal-100'
                    }`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full p-5 md:p-6 flex justify-between items-start text-left hover:bg-white/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        {/* Emoji Icon */}
                        <span className="text-2xl">{faq.icon}</span>
                        <span className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                          isActive ? "text-teal-600" : "text-gray-900 group-hover:text-teal-600"
                        }`}>
                          {faq.question}
                        </span>
                      </div>

                      <motion.div 
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-xl transition-all duration-300 flex-shrink-0 ml-4 ${
                          isActive 
                            ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg" 
                            : "bg-gray-100 text-gray-400 group-hover:bg-teal-50 group-hover:text-teal-500"
                        }`}
                      >
                        {isActive ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="border-t border-gray-100 pt-4"
                            >
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-11">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100"
            >
              <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our expert team is here to help you with any additional questions about eye care.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Our Experts
              </motion.button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;