import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { products } from '../data/data';

export default function Products({ products }) {
    return (
        <section id="products" className="py-24 bg-white relative z-20">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-[-10%] w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6"
                        >
                            <ShoppingBag size={16} />
                            Optical Boutique
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-gradient"
                        >
                            Premium Eyewear & Lenses
                        </motion.h2>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        href="#"
                        className="hidden md:flex items-center gap-2 text-navy font-semibold hover:text-teal transition-colors"
                    >
                        Shop All Products <ArrowRight size={18} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col glass-card rounded-3xl overflow-hidden border border-navy/5"
                        >
                            {/* Product Image */}
                            <div className="relative h-64 overflow-hidden bg-offwhite">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-navy text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                                    {product.category}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-6 flex flex-col flex-grow relative">
                                {/* Inner Glow on Hover */}
                                <div className="absolute inset-0 inner-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>

                                <div className="flex justify-between items-start mb-2 relative z-10">
                                    <h3 className="text-xl font-bold text-navy leading-tight">{product.name}</h3>
                                    <div className="flex items-center gap-1 text-teal bg-teal/10 px-2 py-1 rounded-md">
                                        <Star size={12} fill="currentColor" />
                                        <span className="text-xs font-bold">{product.rating}</span>
                                    </div>
                                </div>

                                <p className="text-navy/60 text-sm mb-6 flex-grow relative z-10">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto relative z-10 pt-4 border-t border-navy/5">
                                    <span className="text-navy font-bold">{product.price}</span>
                                    <button className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-navy group-hover:bg-teal group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-teal transition-colors">
                        Shop All Products <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
