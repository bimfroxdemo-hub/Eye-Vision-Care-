import { motion } from 'motion/react';
import { Camera } from 'lucide-react';



export default function Gallery({ images }) {
    return (
        <section id="gallery" className="py-24 bg-white relative z-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6"
                    >
                        <Camera size={16} />
                        Clinic Tour
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-navy mb-4"
                    >
                        State-of-the-Art <span className="text-gradient">Facilities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-navy/60"
                    >
                        Designed for your comfort and equipped with the latest in optical and surgical technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden glass-card border border-navy/5 shadow-lg ${img.className}`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Inner Glow */}
                            <div className="absolute inset-0 inner-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                            {/* Glassmorphic Label */}
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="glass backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">{img.title}</h3>
                                    <div className="w-8 h-8 rounded-full bg-teal/80 flex items-center justify-center text-white">
                                        <Camera size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
