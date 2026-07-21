import React from "react";
import CountUp from 'react-countup';

const stats = [
  {
    end: 13,
    suffix: "+",
    label: "Years Experience",
    color: "bg-teal-500",
  },
  {
    end: 7,
    suffix: "+",
    label: "Operated Clinics",
    color: "bg-yellow-400",
  },
  {
    end: 20,
    suffix: "K+",
    label: "Patients Treated",
    color: "bg-gray-900",
  },
  {
    end: 6,
    suffix: "+",
    label: "Vision Care Services",
    color: "bg-orange-400",
  },
];

const Stats = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white">

      {/* Container */}
      <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Number */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                <CountUp
                  end={item.end}
                  suffix={item.suffix}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </h2>

              {/* Line */}
              <div className={`w-10 h-1 mt-3 rounded ${item.color}`}></div>

              {/* Label */}
              <p className="text-gray-500 text-sm mt-3 font-semibold tracking-wide uppercase">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;