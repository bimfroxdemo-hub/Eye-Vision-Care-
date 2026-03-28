import React from "react";
import { User, Puzzle, Calendar } from "lucide-react";

const features = [
  {
    icon: <User size={22} />,
    title: "Expert Professionals and World Class Facilities",
    link: "Find Doctors",
  },
  {
    icon: <Puzzle size={22} />,
    title: "Specialty Eyecare treatment for all",
    link: "Book an Appointment",
  },
  {
    icon: <Calendar size={22} />,
    title: "Online Appointment and Excellent Treatment",
    link: "View all Services",
  },
];

const FeatureStrip = () => {
  return (
    <section className="w-full py-8 bg-gradient-to-r from-teal-600 via-green-400 to-yellow-400">

      <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 text-white"
          >
            {/* Icon */}
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h4 className="font-semibold text-sm md:text-base leading-snug">
                {item.title}
              </h4>

              <p className="text-xs md:text-sm mt-1 opacity-90 cursor-pointer hover:underline">
                {item.link} →
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeatureStrip;