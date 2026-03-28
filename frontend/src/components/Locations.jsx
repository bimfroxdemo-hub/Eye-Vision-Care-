import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ArrowRight } from 'lucide-react';


export default function Locations({ locations }) {
    return (
        <section id="locations" className="py-24 bg-offwhite relative z-20">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-[-5%] w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-[-5%] w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6"
                    >
                        <MapPin size={16} />
                        Our Branches
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-navy mb-4"
                    >
                        Find a Clinic <span className="text-gradient">Near You</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-navy/60"
                    >
                        Conveniently located across the city to provide you with accessible, world-class eye care.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col glass-card rounded-3xl overflow-hidden border border-navy/5 relative"
                        >
                            {/* Inner Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl inner-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                            {/* Location Image */}
                            <div className="relative h-56 overflow-hidden bg-navy">
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>

                                {location.isMain && (
                                    <div className="absolute top-4 right-4 bg-teal text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                                        Main Center
                                    </div>
                                )}

                                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white leading-tight">
                                    {location.name}
                                </h3>
                            </div>

                            {/* Location Details */}
                            <div className="p-6 flex flex-col flex-grow relative z-10 bg-white/40">
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <MapPin size={16} className="text-teal" />
                                        </div>
                                        <span className="text-navy/70 text-sm leading-relaxed">{location.address}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                                            <Phone size={16} className="text-teal" />
                                        </div>
                                        <span className="text-navy/70 text-sm font-medium">{location.phone}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                                            <Clock size={16} className="text-teal" />
                                        </div>
                                        <span className="text-navy/70 text-sm">{location.hours}</span>
                                    </li>
                                </ul>

                                <div className="flex items-center justify-between pt-4 border-t border-navy/10 mt-auto">
                                    <a href={location.getDirection} className="inline-flex items-center text-teal font-semibold text-sm group/link hover:text-navy transition-colors">
                                        <Navigation size={16} className="mr-2" />
                                        Get Locations
                                    </a>
                                    {/* <button className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white group-hover:bg-teal transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                        <ArrowRight size={18} />
                                    </button> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
