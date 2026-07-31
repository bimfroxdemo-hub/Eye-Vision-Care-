import { motion } from "motion/react";
import { Quote, Heart, Sparkles, Calendar, ShieldCheck } from "lucide-react";
import founder from "../Image/founder.jpeg";

export default function Story() {
  return (
    <section
      id="story"
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50/30 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl sm:h-96 sm:w-96"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl sm:h-[500px] sm:w-[500px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0f766e 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl sm:w-[88%] lg:w-[85%]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Image Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-teal-400/30 to-yellow-300/30 blur-2xl" />

            {/* Image Card */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-2xl sm:rounded-[2.5rem]">
              <img
                src={founder}
                alt="Eye Vision Care Founders"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Top Badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:left-7 sm:top-7">
                <Heart size={14} className="fill-teal-400 text-teal-400" />
                Trusted Eye Care
              </div>

              {/* Founder Information */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:rounded-3xl sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Co-Founders
                </p>

                <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl md:text-3xl">
                  Nitin Kumar{" "}
                  <span className="text-teal-300">&</span>{" "}
                  Aftab Alam
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Visionaries behind Eye Vision Care
                </p>
              </div>
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-5 -right-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-6 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                  <Calendar size={19} />
                </div>

                <div>
                  <p className="text-xl font-black text-slate-900">2017</p>
                  <p className="text-xs font-medium text-gray-500">
                    Established
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <div className="absolute -left-8 -top-8 -z-10 h-28 w-28 rounded-full border border-teal-300/40 sm:h-40 sm:w-40" />
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-600 sm:text-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
              <Sparkles size={15} />
              Our Story
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Eye Vision Care
              <br />
              <span className="relative inline-block bg-gradient-to-r from-teal-500 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                A Journey of Clarity and Trust
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-teal-500 to-yellow-400"
                />
              </span>
            </h2>

            {/* Description */}
            <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Eye Vision Care is a trusted eye care center focused on
                providing clear vision, quality service, and personalized care.
                Since its beginning, the brand has been committed to delivering
                reliable and professional eye care solutions.
              </p>

              <p>
                Founded in 2017, Eye Vision Care is led by{" "}
                <span className="font-bold text-teal-600">
                  Nitin Kumar Bhaskar Hiwarale
                </span>{" "}
                and{" "}
                <span className="font-bold text-teal-600">Aftab Alam</span>,
                who together bring strong experience and a shared vision in the
                field of eye care.
              </p>

              <p>
                Their journey is built on trust, quality service, and a deep
                commitment to customer satisfaction. With a hands-on approach
                and focus on accuracy, they have created a brand people rely on
                for their vision needs.
              </p>
            </div>

            {/* Trust Features */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-teal-100 bg-white/80 p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Trusted Care
                  </p>
                  <p className="text-xs text-gray-500">
                    Professional service
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-yellow-100 bg-white/80 p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                  <Heart size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Patient First
                  </p>
                  <p className="text-xs text-gray-500">
                    Compassionate approach
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="relative mt-10 border-t border-slate-200 pt-8 sm:mt-12 sm:pt-10">
              <Quote className="absolute -left-2 -top-5 h-16 w-16 rotate-180 text-teal-100 sm:h-20 sm:w-20" />

              <p className="relative z-10 max-w-xl text-xl font-medium italic leading-snug text-slate-800 sm:text-2xl md:text-3xl">
                “Precision in our hands, compassion in our hearts.”
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span
                  className="whitespace-nowrap text-2xl text-teal-600 sm:text-3xl"
                  style={{
                    fontFamily:
                      "'Brush Script MT', 'Caveat', cursive, serif",
                    transform: "rotate(-4deg)",
                  }}
                >
                  Nitin Kumar & Aftab Alam
                </span>

                <div className="h-px flex-grow bg-gradient-to-r from-teal-300 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}