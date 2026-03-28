// import React from "react";
// import { ArrowRight } from "lucide-react";
// import img1 from "/src/Image/service1.jpg";
// import img2 from "/src/Image/service2.jpg";
// import img3 from "/src/Image/service3.jpg";

// const services = [
//   {
//     title: "Cataract Surgery",
//     desc: "Laser assisted cataract removal with advanced precision and faster recovery.",
//     img: img1,
//   },
//   {
//     title: "LASIK & Refractive Surgery",
//     desc: "Safe and effective vision correction procedures for clear eyesight.",
//     img: img2,
//   },
//   {
//     title: "Retina Care",
//     desc: "Advanced treatment for diabetic retinopathy and retinal disorders.",
//     img: img3,
//   },
// ];

// const Services = () => {
//   return (
//     <section className="w-full py-16 md:py-24 bg-gray-50">

//       {/* 🔥 Responsive Container (20% feel spacing) */}
//       <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Advanced Vision
//           </h2>

//           <h3 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">
//             Care Solutions
//           </h3>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
//             >

//               {/* Image (TALL DESIGN) */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:scale-110 transition duration-500"
//                 />

//                 {/* Floating Button */}
//                 <div className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full hover:bg-teal-500 transition cursor-pointer">
//                   <ArrowRight size={18} />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h4 className="text-lg font-semibold text-gray-900">
//                   {item.title}
//                 </h4>

//                 <p className="text-gray-500 text-sm mt-2 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;


import { motion } from 'motion/react';



export default function Services({ services }) {
  return (
    <section id="services" className="py-24 bg-offwhite relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-navy mb-4"
          >
            Advanced <span className="text-gradient">Treatments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-navy/60"
          >
            We combine medical expertise with cutting-edge technology to provide unparalleled care for your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.1)] transition-all duration-300 border border-navy/5 overflow-hidden"
            >

              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 md:h-72 lg:h-80 rounded-2xl object-cover group-hover:scale-110 transition duration-500 mb-10"
              />
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-3xl inner-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Soft Gradient Background */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${service.color} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-offwhite flex items-center justify-center text-teal mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-navy/60 mb-8 leading-relaxed text-sm">
                  {service.description}
                </p>

                <a href="#" className="inline-flex items-center text-teal font-semibold text-sm group/link">
                  Learn More
                  <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  );
}
