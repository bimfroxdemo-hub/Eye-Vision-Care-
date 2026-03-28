
// Image
import eyeImg from "/src/Image/eye-care.jpg";


const Appointment = ({ steps }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">

      <div className="w-[92%] sm:w-[88%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-14">

          {/* LEFT */}
          <div>
            <span className="text-sm bg-white px-4 py-1 rounded-full shadow text-teal-600">
              Simple Booking Process
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-snug">
              How to Book Your <br />
              <span className="text-teal-500 underline">
                Eye Care Appointment
              </span>
            </h2>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[300px]">
            <img
              src={eyeImg}
              alt="Eye"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >

              {/* Big Number (background) */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-gray-100">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h4 className="text-base font-semibold text-gray-900">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Appointment;