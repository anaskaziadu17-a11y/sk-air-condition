import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, CheckCircle2, Star, ArrowRight } from 'lucide-react';

/**
 * AC Repair Kalol Landing Page
 * SEO-optimized page targeting "AC repair Kalol" and related keywords
 */

const ACRepairKalol = () => {
  const bookingRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'AC Repair' });

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'AC Repair',
      description: 'Fast repair service for all AC brands and models in Kalol',
      icon: '🔧'
    },
    {
      title: 'AC Service',
      description: 'Professional cleaning and maintenance for optimal cooling',
      icon: '🧹'
    },
    {
      title: 'AC Installation',
      description: 'Expert installation of new AC units with warranty',
      icon: '📦'
    },
    {
      title: 'Gas Refilling',
      description: 'Refrigerant refilling and pressure optimization',
      icon: '⚙️'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Patel',
      location: 'Kalol',
      text: 'SK Air Condition repaired my AC in just 1 hour. Professional and affordable!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Kalol',
      text: 'Best AC service in Kalol. Highly recommended for quality work.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      location: 'Kalol',
      text: 'Called at 11 PM and they came within 30 minutes. Excellent service!',
      rating: 5
    }
  ];

  return (
    <div className="w-full bg-ice-950 text-white">
      {/* Hero Section - KALOL FOCUSED */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="snow-particle"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h1
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            AC Repair in <span className="text-ice-400">Kalol</span>
            <br />
            <span className="text-3xl sm:text-4xl">24/7 Expert Service</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-2xl text-ice-100/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Professional AC repair, service & installation for all brands in Kalol. Same-day service available. 
            Expert technicians, affordable rates, guaranteed satisfaction.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-bold text-lg shadow-xl shadow-ice-500/30 transition-all"
            >
              Book Now
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <a
              href="tel:+917802984111"
              className="px-8 py-4 border-2 border-ice-400 text-ice-400 hover:bg-ice-400/10 rounded-xl font-bold text-lg transition-all"
            >
              <Phone className="inline mr-2" size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Trust Signal */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Expert Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>100% Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - KALOL SPECIFIC */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Why Choose SK Air Condition in <span className="text-ice-400">Kalol</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Fast Response', desc: '24/7 emergency service with response time <30 mins' },
              { icon: '💰', title: 'Affordable Rates', desc: 'Competitive pricing with transparent billing no hidden charges' },
              { icon: '🛠️', title: 'Expert Team', desc: 'Certified technicians with 10+ years experience' },
              { icon: '🔒', title: '100% Warranty', desc: '15-day service warranty on all repair works' },
              { icon: '✅', title: 'All Brands', desc: 'Service for Daikin, Voltas, LG, IFB, Hitachi & more' },
              { icon: '📍', title: 'Local Expert', desc: 'Based in Kalol, know your areas specific cooling needs' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-ice-400/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-ice-100/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Our AC Services in <span className="text-ice-400">Kalol</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-ice-400/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-ice-100/70 mb-4">{service.description}</p>
                <button className="text-ice-400 hover:text-ice-300 font-bold flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Loved by <span className="text-ice-400">Kalol</span> Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass p-6 rounded-2xl border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-ice-100/70 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-ice-400">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">
            Serving All of <span className="text-ice-400">Kalol</span>
          </h2>
          <p className="text-xl text-ice-100/70 mb-8 max-w-2xl mx-auto">
            We cover all areas of Kalol including residential, commercial, and industrial locations. 
            Same-day service available for urgent AC repairs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Main Bazaar', 'Residential Area', 'Industrial Zone', 'Market Street', 'Pincode 382721'].map((area, i) => (
              <span key={i} className="glass px-6 py-3 rounded-full border border-ice-400/30">
                <MapPin className="inline mr-2" size={16} />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={bookingRef} className="py-20 px-4 bg-black/40">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-center">
            Get Service in <span className="text-ice-400">Kalol</span> Today
          </h2>

          <form className="glass p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-ice-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-ice-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Service Needed</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-ice-500 focus:outline-none"
              >
                <option className="bg-ice-950" value="AC Repair">AC Repair</option>
                <option className="bg-ice-950" value="AC Service">AC Service</option>
                <option className="bg-ice-950" value="AC Installation">AC Installation</option>
                <option className="bg-ice-950" value="Gas Refilling">Gas Refilling</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-black text-lg transition-all"
            >
              Request Service Now
            </button>
          </form>

          {/* Quick Contact */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917802984111" className="glass px-6 py-4 rounded-xl border border-ice-400/30 text-center font-bold hover:border-ice-400">
              <Phone className="inline mr-2" size={20} />
              Call: 7802984111
            </a>
            <a href="https://wa.me/917802984111" target="_blank" rel="noopener noreferrer" className="glass px-6 py-4 rounded-xl border border-green-400/30 text-center font-bold hover:border-green-400">
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            FAQs about AC Repair in <span className="text-ice-400">Kalol</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you respond to AC repair calls in Kalol?",
                a: "We aim to respond within 30 minutes during day and 1 hour during night. Emergency calls are prioritized."
              },
              {
                q: "Do you provide warranty on AC repairs in Kalol?",
                a: "Yes, we provide 15-day warranty on all repair works. Parts come with manufacturer warranty."
              },
              {
                q: "What AC brands do you service in Kalol?",
                a: "We service all major brands including Daikin, Voltas, LG, IFB, Hitachi, Blue Star, Haier and more."
              },
              {
                q: "Are your rates competitive in Kalol?",
                a: "Yes, we offer the best rates in Kalol with transparent billing. No hidden charges."
              },
              {
                q: "Do you offer AC installation in Kalol?",
                a: "Yes, we provide professional AC installation with proper ducting, insulation and testing."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-ice-400/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-bold text-lg text-ice-300 mb-2">{faq.q}</h3>
                <p className="text-ice-100/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-ice-500/20 to-ice-400/20 border-t border-ice-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Don't Suffer in the Heat! Get AC Repair in Kalol Now
          </h2>
          <p className="text-xl text-ice-100/70 mb-8">
            SK Air Condition is your trusted partner for all AC repair and service needs in Kalol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-bold text-lg transition-all"
            >
              Book Service Now
            </button>
            <a
              href="tel:+917802984111"
              className="px-8 py-4 border-2 border-ice-400 text-ice-400 hover:bg-ice-400/10 rounded-xl font-bold text-lg transition-all"
            >
              Call 7802984111
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACRepairKalol;
