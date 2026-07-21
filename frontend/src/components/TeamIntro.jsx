import { motion } from 'motion/react';
import { Users, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamIntroImg from '../Image/TeamIntro.jpeg';

export default function TeamIntro() {
    return (
        <section className="py-24 bg-offwhite relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 flex flex-col lg:flex-row items-stretch">

                {/* Content Side (Left) */}
                <div className="relative z-10 p-10 md:p-16 lg:p-20 lg:w-1/2 flex flex-col justify-center">

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-bold uppercase tracking-wider mb-6 border border-teal-100"
                        >
                            <Users size={16} />
                            World-Class Experts
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight"
                        >
                            Dedicated to Your <br /><span className="bg-gradient-to-r from-teal-500 to-yellow-500 bg-clip-text text-transparent">Vision Health</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                        >
                            Our eye vision care team of optometrist and expert sales staff work to provide comprehensive eye care to every patient that walks to our vision care clinic.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <div className="flex items-center gap-3 text-navy">
                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                                    <Award size={18} />
                                </div>
                                <span className="text-sm font-medium">Board Certified</span>
                            </div>
                            <div className="flex items-center gap-3 text-navy">
                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                                    <ShieldCheck size={18} />
                                </div>
                                <span className="text-sm font-medium">20+ Years Exp.</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                to="/about#team"
                                className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                View Full Team <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Image Side (Right) */}
                <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
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

