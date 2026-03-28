import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, ArrowRight } from 'lucide-react';

export default function contactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        date: '',
        service: 'Comprehensive Exam'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, phone, date, service } = formData;

        if (!fullName || !phone || !date) {
            alert("Please fill in all required fields.");
            return;
        }

        const message = `*New Appointment Request* 🗓️\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Preferred Date:* ${date}\n*Service Required:* ${service}`;
        const whatsappUrl = `https://wa.me/919763534348?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-offwhite relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-navy/5">

                    {/* Left Side - Image & Info */}
                    <div className="lg:w-5/12 bg-navy relative overflow-hidden p-12 flex flex-col justify-between">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop"
                                alt="Clinic Interior"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-teal/80"></div>
                        </div>

                        <div className="relative z-10">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-extrabold text-white mb-4"
                            >
                                Ready for Clearer Vision?
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/80 mb-8 max-w-md"
                            >
                                Schedule your comprehensive eye exam today. Our specialists are ready to provide you with personalized, medical-grade care.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10 space-y-6"
                        >
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                                    <Phone size={20} className="text-teal" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60 uppercase tracking-wider">Call Us Directly</p>
                                    <p className="text-xl font-semibold">+91 9763534348</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                                    <Clock size={20} className="text-teal" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60 uppercase tracking-wider">Working Hours</p>
                                    <p className="text-lg font-medium">Mon - Fri: 9:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-7/12 p-12 md:p-16 bg-white relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 space-y-6"
                        >
                            <h4 className="text-2xl font-extrabold text-navy mb-8">Schedule a Visit</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-navy/70 ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-navy/40">
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 bg-offwhite border border-navy/10 rounded-xl focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-navy/70 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-navy/40">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 bg-offwhite border border-navy/10 rounded-xl focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all"
                                            placeholder="+91 0000000000"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-navy/70 ml-1">Preferred Date</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-navy/40">
                                            <Calendar size={18} />
                                        </div>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 bg-offwhite border border-navy/10 rounded-xl focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-navy/80"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-navy/70 ml-1">Service Required</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-offwhite border border-navy/10 rounded-xl focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-navy/80 appearance-none"
                                    >
                                        <option>Comprehensive Exam</option>
                                        <option>LASIK Consultation</option>
                                        <option>Cataract Evaluation</option>
                                        <option>Dry Eye Treatment</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full group relative px-8 py-4 bg-navy text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(15,23,42,0.2)]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Confirm Appointment
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                </button>
                            </div>
                            <p className="text-xs text-center text-navy/50 mt-4">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}
