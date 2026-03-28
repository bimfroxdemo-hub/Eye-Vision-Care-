import React from "react";


const Doctors = ({ doctorsDetails }) => {
  return (
    <section id="team" className="w-full py-16 md:py-24 bg-gray-50">

      {/* Container */}
      <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Team Of
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-gradient">
            Expert Doctors
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {doctorsDetails.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h4 className="text-base font-semibold text-gray-900">
                  {doc.name}
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  {doc.role}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        {/* <div className="flex justify-center mt-10">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition shadow">
            View All Doctors
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default Doctors;