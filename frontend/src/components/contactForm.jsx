import { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    service: "Comprehensive Exam",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phone, date, service } = formData;

    if (!fullName.trim() || !phone.trim() || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const message = `
*New Appointment Request* 🗓️

*Patient Name:* ${fullName}
*Patient Phone:* ${phone}
*Preferred Date:* ${formattedDate}
*Service Required:* ${service}

Please contact the patient for confirmation.
    `.trim();

    // Eye Vision Care ka WhatsApp number
    const clinicWhatsAppNumber = "919763534348";

    const whatsappUrl = `https://wa.me/${clinicWhatsAppNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      fullName: "",
      phone: "",
      date: "",
      service: "Comprehensive Exam",
    });

    setIsSubmitting(false);
  };

  // Aaj se pehle ki date select na ho
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-16 sm:py-20 md:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl sm:w-[88%]">
        <div className="grid overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl lg:grid-cols-12 lg:rounded-[3rem]">
          
          {/* LEFT INFO */}
          <div className="relative overflow-hidden bg-slate-900 p-7 text-white sm:p-10 md:p-14 lg:col-span-5">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950 to-teal-800" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-200 backdrop-blur-sm">
                <MessageCircle size={16} />
                WhatsApp Appointment
              </div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-black leading-tight sm:text-4xl"
              >
                Ready for
                <span className="block text-teal-300">
                  Clearer Vision?
                </span>
              </motion.h2>

              <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                Form submit karte hi aapki appointment request hamare WhatsApp
                par send ho jayegi. Hamari team aapse jaldi contact karegi.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="tel:+919763534348"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Call Us
                    </p>
                    <p className="mt-1 font-semibold">+91 9763534348</p>
                    <p className="font-semibold">+91 9167133049</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-slate-900">
                    <Clock size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Working Hours
                    </p>
                    <p className="mt-1 font-semibold">
                      Monday - Sunday
                    </p>
                    <p className="text-sm text-gray-300">
                      9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="p-7 sm:p-10 md:p-14 lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
                  Book an Appointment
                </p>

                <h3 className="mt-2 text-3xl font-black text-slate-900">
                  Schedule Your Visit
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Apni details fill karein aur WhatsApp par appointment request
                  send karein.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name *
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-gray-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 0000000000"
                      pattern="[0-9+\s-]{10,}"
                      className="w-full rounded-xl border border-gray-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      required
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Preferred Date *
                  </label>

                  <div className="relative">
                    <Calendar
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      min={today}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      required
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Service Required
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                  >
                    <option>Comprehensive Exam</option>
                    <option>Eye Power Checkup</option>
                    <option>Contact Lens Consultation</option>
                    <option>Cataract Evaluation</option>
                    <option>Dry Eye Treatment</option>
                    <option>Optical Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageCircle size={19} />

                {isSubmitting
                  ? "Opening WhatsApp..."
                  : "Send Appointment on WhatsApp"}

                {!isSubmitting && (
                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-500">
                Submit karne ke baad WhatsApp open hoga aur message automatically
                prepare ho jayega. Aapko sirf send button press karna hoga.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}