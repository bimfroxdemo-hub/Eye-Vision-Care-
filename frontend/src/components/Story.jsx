import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-white relative z-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-[-5%] w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden glass-card border border-navy/5 aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop"
                alt="Dr. Sarah Chen - Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80"></div>

              {/* Floating Glass Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl transform transition-transform duration-500 hover:-translate-y-2">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">Dr. Nitin Kumar</h3>
                <p className="text-teal font-medium text-sm md:text-base uppercase tracking-wider">Founder & Chief Medical Officer</p>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-navy/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-bold uppercase tracking-wider mb-8 self-start">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
              Our Story
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-8 leading-tight">
              Eye Vision Care<br /><span className="text-gradient">A Journey of Clarity and Trust</span>
            </h2>

            <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
              <p>
                Founded in 2017, Eye Vision Care is led by Nitin Kumar Bhaskar Hiwarale, who brings over 13 years of experience in the field of eye care.              </p>
              <p>
                Along with his partner Aftab Alam, the business was built on a strong foundation of trust, quality service, and customer satisfaction.              </p>
              <p>
                Today, Eye Vision Care is known for its reliable vision solutions and commitment to delivering professional and personalized care.              </p>
            </div>

            {/* Quote / Signature Area */}
            <div className="mt-12 pt-10 border-t border-navy/10 relative">
              <Quote className="absolute top-0 left-0 text-teal/10 w-24 h-24 -translate-y-1/2 -translate-x-6 rotate-180" />
              <p className="text-2xl md:text-3xl text-navy italic relative z-10 leading-snug">
                "Precision in our hands, compassion in our hearts."
              </p>
              <div className="mt-8 flex items-center gap-6">
                {/* Faux Signature */}
                <span
                  className="text-4xl text-teal opacity-90"
                  style={{ fontFamily: "'Brush Script MT', 'Caveat', cursive, serif", transform: "rotate(-5deg)" }}
                >
                  Nitin Kumar
                </span>
                <div className="h-px bg-navy/10 flex-grow"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
