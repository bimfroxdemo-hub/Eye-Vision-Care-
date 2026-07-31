import React from "react";
import { motion } from "motion/react";
import { Award, ArrowUpRight, CheckCircle, Users } from "lucide-react";

const Doctors = ({ doctorsDetails = [] }) => {
  return (
    <section
      id="team"
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/40 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl sm:h-96 sm:w-96" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0f766e 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl sm:w-[88%] md:w-[85%] lg:w-[80%]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-600 shadow-sm backdrop-blur-sm sm:text-sm">
            <Users size={16} />
            Our Professional Team
          </div>

          <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Meet Our{" "}
            <span className="relative inline-block bg-gradient-to-r from-teal-500 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
              Expert Optometrists
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-teal-500 to-yellow-400"
              />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Our experienced eye care professionals are committed to providing
            personalized treatment, accurate diagnosis, and compassionate care.
          </p>
        </motion.div>

        {/* DOCTOR CARDS */}
        {doctorsDetails?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctorsDetails.map((doc, index) => (
              <motion.article
                key={doc.id || index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-teal-200 hover:shadow-[0_20px_45px_rgba(13,148,136,0.18)] sm:rounded-[2rem]"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-slate-100 sm:h-80">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                  />

                  {/* Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-70" />

                  {/* Top Badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <CheckCircle size={13} className="text-teal-300" />
                    Certified Expert
                  </div>

                  {/* Hover Action */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-teal-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={19} />
                  </div>

                  {/* Bottom Image Text */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                      Eye Care Specialist
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-5 text-center sm:p-6">
                  <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                    {doc.name}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {doc.role}
                  </p>

                  {/* Divider */}
                  <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-teal-400 to-yellow-400 transition-all duration-300 group-hover:w-24" />
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-yellow-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">
              Team information will be available soon.
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center sm:mt-16"
        >
          <a
            href="/about#team"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8 sm:text-base"
          >
            View Complete Team
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;