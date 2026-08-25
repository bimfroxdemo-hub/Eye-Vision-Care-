import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeatureStrip from "../components/FeatureStrip";
import Appointment from "../components/Appointment";
import FAQ from "../components/FAQ";
import aboutImg from "../Image/about.jpeg";
import { CheckCircle, Eye, Award, Users, ArrowRight, Star, Shield, Heart } from "lucide-react";
import { steps } from "../data/data";
import { Link } from "react-router-dom";
import TeamIntro from "../components/TeamIntro";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const seoData = {
  title: "Best Eye Clinic in Surat, Vesu, Bhestan & Near Al Catoon | Eye Vision Care",
  description:
    "Eye Vision Care is your trusted eye clinic in Surat, Vesu, Bhestan, Aarni, and near Al Catoon for eye checkup, cataract treatment, LASIK consultation, contact lenses, and advanced vision care.",
  keywords:
    "eye clinic in Surat, eye specialist in Vesu, eye doctor in Bhestan, eye care near Al Catoon, best eye hospital in Surat, cataract treatment in Vesu, LASIK consultation in Bhestan, contact lens clinic in Surat, eye checkup in Aarni, eye care near Bhestan, eye clinic near Al Catoon",
  url: "https://eyevissioncare.in/",
  image: "/fevicon.png",
};

const Home = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <>
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        businessName="Eye Vision Care"
        areaServed={["Surat", "Vesu", "Bhestan", "Aarni", "Al Catoon"]}
        telephone="+91-XXXXXXXXXX"
        faq={[
          {
            question: "Do you provide eye checkups in Surat and nearby areas?",
            answer: "Yes, Eye Vision Care provides comprehensive eye checkups, advanced vision testing, and treatment for patients in Surat, Vesu, Bhestan, Aarni, and near Al Catoon.",
          },
          {
            question: "Can I get cataract treatment or LASIK consultation near Al Catoon?",
            answer: "Yes, we offer cataract treatment guidance, LASIK consultation, and personalized vision care for patients across Surat and nearby localities.",
          },
          {
            question: "Do you help with contact lens fitting and eye care for families?",
            answer: "We offer contact lens consultation, pediatric eye care, senior eye care, and family-friendly services tailored to different vision needs.",
          },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalBusiness",
              name: "Eye Vision Care",
              image: seoData.image,
              description: seoData.description,
              url: seoData.url,
              telephone: "+91-XXXXXXXXXX",
              areaServed: ["Surat", "Vesu", "Bhestan", "Aarni", "Al Catoon"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              openingHours: ["Mo-Sa 09:00-20:00"],
              medicalSpecialty: ["Eye Care", "Ophthalmology"],
              priceRange: "$$",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do you provide eye checkups in Surat and nearby areas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Eye Vision Care provides comprehensive eye checkups, advanced vision testing, and treatment for patients in Surat, Vesu, Bhestan, Aarni, and near Al Catoon.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I get cataract treatment or LASIK consultation near Al Catoon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer cataract treatment guidance, LASIK consultation, and personalized vision care for patients across Surat and nearby localities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you help with contact lens fitting and eye care for families?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer contact lens consultation, pediatric eye care, senior eye care, and family-friendly services tailored to different vision needs.",
                  },
                },
              ],
            },
          ],
        }}
      />
      <Hero />
      <TeamIntro />
      <Stats />

      {/* Enhanced About Intro Section */}
      <motion.section 
        ref={aboutRef}
        className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden"
      >
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y, rotate }}
            className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
            className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"
          />
          
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute w-3 h-3 bg-teal-400/60 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>

        <div className="w-[92%] sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[80%] mx-auto relative z-10">
          
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
              <Eye size={16} />
              About Our Clinic
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Where Vision Meets{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE - Enhanced Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              
              {/* Main Image Container */}
              <div className="relative group">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Image */}
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  src={aboutImg}
                  alt="About Eye Vision Care"
                  className="relative w-[85%] md:w-full rounded-3xl object-cover shadow-2xl border-4 border-white/50"
                />

                {/* Enhanced Vertical Text */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:block absolute left-[-60px] top-1/2 -translate-y-1/2"
                >
                  <div className="rotate-[-90deg] whitespace-nowrap">
                    <span className="text-gray-700 font-bold text-lg tracking-widest">
                      TRUSTED SINCE 2010
                    </span>
                  </div>
                </motion.div>

                {/* Enhanced Circle Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute bottom-6 right-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center text-xs text-center shadow-xl border-4 border-white cursor-pointer"
                >
                  <Award size={20} className="mb-1" />
                  <span className="font-bold">Excellence</span>
                  <span className="text-[10px]">Award</span>
                </motion.div>

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                      <Users size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">50,000+</div>
                      <div className="text-xs text-gray-600">Happy Patients</div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* RIGHT SIDE - Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  <Heart size={16} />
                </motion.div>
                About Our Legacy
              </motion.span>

              {/* Enhanced Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight mb-6"
              >
                Compassionate care to provide{" "}
                <br className="hidden sm:block" />
                the quality{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    Eye Vision Services
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 origin-left rounded-full"
                  />
                </span>
              </motion.h2>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mt-4 text-lg leading-relaxed mb-8"
              >
                Our state-of-the-art facility is equipped with the latest
                diagnostic and treatment technologies, ensuring accurate
                diagnoses and effective treatment plans tailored to your unique needs.
              </motion.p>

              {/* Enhanced Mission/Vision Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid sm:grid-cols-2 gap-6 mb-8"
              >

                {/* Mission Card */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(14, 165, 233, 0.15)" 
                  }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 group hover:border-teal-200 transition-all duration-300"
                >
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <span className="text-lg">Our Mission</span>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To deliver advanced, compassionate eye care using cutting-edge technologies and personalized treatment approaches.
                  </p>
                </motion.div>

                {/* Vision Card */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(251, 191, 36, 0.15)" 
                  }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 group hover:border-yellow-200 transition-all duration-300"
                >
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield size={20} className="text-white" />
                    </div>
                    <span className="text-lg">Our Vision</span>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be the leading eye care provider focused on clinical excellence and innovative patient-centered solutions.
                  </p>
                </motion.div>

              </motion.div>

              {/* Enhanced Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-teal-600 mb-1">15+</div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center border-x border-teal-200">
                  <div className="text-2xl font-black text-emerald-600 mb-1">98%</div>
                  <div className="text-xs text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-600 mb-1">4.9★</div>
                  <div className="text-xs text-gray-600 font-medium">Patient Rating</div>
                </div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Link to="/services">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <span className="relative">Explore Our Services</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </motion.section>

      <FeatureStrip />
      <Appointment steps={steps} />
      <FAQ />
    </>
  );
};

export default Home;