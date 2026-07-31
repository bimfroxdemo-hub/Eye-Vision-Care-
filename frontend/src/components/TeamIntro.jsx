import { motion } from 'framer-motion';
import { Users, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamIntroImg from '../Image/TeamIntro.jpeg';

export default function TeamIntro() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative" style={{ position: 'relative' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row items-stretch">

                    {/* Content Side (Left) - Responsive */}
                    <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 lg:w-1/2 flex flex-col justify-center">

                        <div className="relative z-10">
                            {/* Badge - Responsive */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-teal-50 text-teal-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-teal-100"
                            >
                                <Users size={14} className="sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">World-Class Experts</span>
                                <span className="sm:hidden">Experts</span>
                            </motion.div>

                            {/* Heading - Responsive */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight"
                            >
                                Dedicated to Your{" "}
                                <br className="hidden sm:block" />
                                <span className="bg-gradient-to-r from-teal-500 to-yellow-500 bg-clip-text text-transparent">
                                    Vision Health
                                </span>
                            </motion.h2>

                            {/* Description - Responsive */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                            >
                                Our eye vision care team of optometrists and expert sales staff work to provide comprehensive eye care to every patient that walks into our vision care clinic.
                            </motion.p>

                            {/* Credentials - Responsive */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
                            >
                                <div className="flex items-center gap-3 text-gray-900">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                                        <Award size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium">Board Certified</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-900">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                                        <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium">20+ Years Experience</span>
                                </div>
                            </motion.div>

                            {/* CTA Button - Responsive */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    to="/about#team"
                                    className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
                                >
                                    <span>View Full Team</span>
                                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Image Side (Right) - Responsive */}
                    <div className="lg:w-1/2 relative min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-full">
                        <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-[-20%]">
                            <img
                                src={teamIntroImg}
                                alt="Our Medical Team"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient fade to blend image with the left content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}