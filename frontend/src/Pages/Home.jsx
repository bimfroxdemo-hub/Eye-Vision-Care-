import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeatureStrip from "../components/FeatureStrip";
import Appointment from "../components/Appointment";
import FAQ from "../components/FAQ";
import aboutImg from "/src/Image/about.jpg";
import { CheckCircle } from "lucide-react";
import { steps } from "../data/data";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Hero />
      <Stats />

      {/* About Intro */}
      {/* <ServiceCard services={services} /> */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#f5f5f5] to-[#f3d98b]">

        <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="relative flex justify-center">

            {/* Image */}
            <img
              src={aboutImg}
              alt="About"
              className="w-[80%] md:w-full rounded-2xl object-cover"
            />

            {/* Vertical Text */}
            <div className="hidden md:block absolute left-[-40px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-gray-700 font-medium">
              12+ Years of Experience
            </div>

            {/* Circle Badge */}
            <div className="absolute bottom-4 right-4 bg-black text-white w-20 h-20 rounded-full flex items-center justify-center text-xs text-center shadow-lg">
              Eye Vision Care
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Tag */}
            <span className="text-sm bg-white px-4 py-1 rounded-full shadow text-teal-600">
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-snug">
              Compassionate care to provide <br />
              the quality{" "}
              <span className="text-teal-500 underline">
                eye care services.
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              Our state-of-the-art facility is equipped with the latest
              diagnostic and treatment technologies, ensuring accurate
              diagnoses and effective treatment plans.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">

              {/* Mission */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle size={18} className="text-teal-500" />
                  Mission
                </h4>
                <p className="text-gray-500 text-sm">
                  To deliver advanced, compassionate eye care using innovative technologies.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle size={18} className="text-yellow-500" />
                  Vision
                </h4>
                <p className="text-gray-500 text-sm">
                  To be a leading eye care provider focused on clinical excellence.
                </p>
              </div>

            </div>

            {/* CTA */}
            <Link to="/services">
              <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition shadow">
                View All Services
              </button>
            </Link>

          </div>

        </div>
      </section>
      {/* <Doctors /> */}
      <FeatureStrip />
      <Appointment steps={steps} />
      <FAQ />
    </>
  );
};

export default Home;