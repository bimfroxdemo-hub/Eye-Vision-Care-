import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Images (replace with your own)
import img1 from "/src/Image/faq1.jpg";
import img2 from "/src/Image/faq2.jpg";

const faqs = [
  {
    question: "What age group do you provide care for?",
    answer:
      "We provide comprehensive eye care for all age groups, from infants to seniors.",
  },
  {
    question: "Can I book an online consultation?",
    answer:
      "Yes, online consultations are available for follow-ups and initial screenings.",
  },
  {
    question: "Do you offer vaccinations at your clinic?",
    answer:
      "Yes, we offer selected preventive care services and consultations.",
  },
  {
    question: "How often should I get my eyes checked?",
    answer:
      "Regular checkups are recommended every 6–12 months depending on your condition.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(1);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">

      <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[80%] xl:w-[75%] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex justify-center">

          <img
            src={img1}
            alt="faq"
            className="w-[70%] rounded-xl shadow-lg"
          />

          <img
            src={img2}
            alt="faq"
            className="w-[60%] rounded-xl shadow-lg absolute bottom-[-30px] right-0"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Tag */}
          <span className="text-sm bg-white px-4 py-1 rounded-full shadow text-teal-600">
            Our Experts Respond
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-snug">
            Frequently{" "}
            <span className="text-teal-500 underline">
              Asked Questions
            </span>
          </h2>

          {/* Accordion */}
          <div className="mt-6 space-y-4">

            {faqs.map((faq, index) => {
              const isActive = active === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className={`font-semibold transition-colors duration-300 ${isActive ? "text-teal-600" : "text-gray-900"}`}>
                      {faq.question}
                    </span>

                    <div className={`p-2 rounded-full transition-all duration-300 ${isActive ? "bg-teal-50 text-teal-500 rotate-180" : "bg-gray-50 text-gray-400"}`}>
                      {isActive ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;