import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, CheckCircle2, Star, ArrowRight } from 'lucide-react';

/**
 * AC Service Gandhinagar Landing Page
 * SEO-optimized page targeting "AC service Gandhinagar" and related keywords
 */

const ACServiceGandhinagar = () => {
  const bookingRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'AC Service' });

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'AC Service',
      description: 'Comprehensive AC service & maintenance for Gandhinagar offices and homes',
      icon: '🧹'
    },
    {
      title: 'AC Repair',
      description: 'Quick repair service for corporate and residential clients',
      icon: '🔧'
    },
    {
      title: 'AC Installation',
      description: 'Professional installation for offices, malls, and residential buildings',
      icon: '📦'
    },
    {
      title: 'AMC Contracts',
      description: 'Annual Maintenance Contracts for corporate and commercial units',
      icon: '📋'
    }
  ];

  const testimonials = [
    {
      name: 'Arun Enterprises',
      location: 'Gandhinagar Business District',
      text: 'Excellent service! They handle all our office ACs professionally. AMC is very reliable.',
      rating: 5
    },
    {
      name: 'Snehal Residence',
      location: 'Gandhinagar',
      text: 'Professional team, on-time service, and great value for money. Highly satisfied!',
      rating: 5
    },
    {
      name: 'Shilp Hospital',
      location: 'Gandhinagar',
      text: 'NK Air Condition maintains all our ACs with zero downtime. Perfect for healthcare facility.',
      rating: 5
    }
  ];

  return (
    <div className="w-full bg-ice-950 text-white">
      {/* Hero Section - GANDHINAGAR FOCUSED */}
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
            AC Service in <span className="text-ice-400">Gandhinagar</span>
            <br />
            <span className="text-3xl sm:text-4xl">Capital City's Trusted Partner</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-2xl text-ice-100/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Premium AC service, repair & maintenance for Gandhinagar's corporate and residential sectors. 
            Serving offices, hospitals, malls, and homes with excellence since inception.
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
              Schedule Service
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
              <span>Corporate Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Hospital-Grade Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>AMC Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - GANDHINAGAR SPECIFIC */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Why <span className="text-ice-400">Gandhinagar</span> Trusts SK Air Condition
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏢', title: 'Corporate Experts', desc: 'Preferred partner for Gandhinagar offices, malls & institutions' },
              { icon: '🏥', title: 'Healthcare Ready', desc: 'Certified for hospital, clinic & lab environments' },
              { icon: '📊', title: 'Predictable Costs', desc: 'Transparent AMC pricing for all sectors' },
              { icon: '🎖️', title: 'Certified Team', desc: 'Trained professionals with corporate standards' },
              { icon: '✅', title: 'Zero Downtime', desc: 'Emergency backup for critical cooling needs' },
              { icon: '🌐', title: 'Pan-Gandhinagar', desc: 'Serving all zones from Sector 1 to Sector 28' }
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
            Complete AC Solutions for <span className="text-ice-400">Gandhinagar</span>
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
                  Explore <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Trusted by <span className="text-ice-400">Gandhinagar</span> Businesses
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

      {/* Service Coverage */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">
            Covering All of <span className="text-ice-400">Gandhinagar</span>
          </h2>
          <p className="text-xl text-ice-100/70 mb-12 max-w-2xl mx-auto">
            From government buildings to commercial establishments, we serve Gandhinagar's entire infrastructure 
            with professional AC service and maintenance contracts.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-ice-300">Sectors We Serve</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Sector 1-5', 'Sector 7-10', 'Sector 15', 'Sector 20', 'Business District', 'Old City'].map((area, i) => (
                  <span key={i} className="glass px-4 py-2 rounded-full border border-ice-400/30 text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-ice-300">Client Types</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Offices', 'Corporate', 'Hospitals', 'Malls', 'Schools', 'Residences'].map((type, i) => (
                  <span key={i} className="glass px-4 py-2 rounded-full border border-ice-400/30 text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingRef} className="py-20 px-4 bg-black/40">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-center">
            Schedule AC Service in <span className="text-ice-400">Gandhinagar</span>
          </h2>

          <form className="glass p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Your Name / Organization</label>
              <input
                type="text"
                placeholder="Enter name or company name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-ice-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Contact Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-ice-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Service Type</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-ice-500 focus:outline-none"
              >
                <option className="bg-ice-950" value="AC Service">AC Service</option>
                <option className="bg-ice-950" value="AC Repair">AC Repair</option>
                <option className="bg-ice-950" value="AC Installation">AC Installation</option>
                <option className="bg-ice-950" value="AMC Contract">AMC Contract</option>
                <option className="bg-ice-950" value="Emergency Service">Emergency Service</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-black text-lg transition-all"
            >
              Get Service Quote
            </button>
          </form>

          {/* Quick Contact */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917802984111" className="glass px-6 py-4 rounded-xl border border-ice-400/30 text-center font-bold hover:border-ice-400">
              <Phone className="inline mr-2" size={20} />
              Call: 7802984111
            </a>
            <a href="https://wa.me/917802984111" target="_blank" rel="noopener noreferrer" className="glass px-6 py-4 rounded-xl border border-green-400/30 text-center font-bold hover:border-green-400">
              💬 WhatsApp Business
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            AC Service FAQs for <span className="text-ice-400">Gandhinagar</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is included in your AMC contract?",
                a: "Our AMC includes quarterly service, emergency repairs, spare parts, and 24/7 support with zero service charges."
              },
              {
                q: "Do you service Gandhinagar government buildings?",
                a: "Yes, we have experience servicing government offices, institutions, and public sector buildings with corporate standards."
              },
              {
                q: "What's the response time for emergency AC repair?",
                a: "Emergency repairs in Gandhinagar are handled within 1 hour during business hours and 2 hours during night."
              },
              {
                q: "Can you handle large-scale installations?",
                a: "Yes, we specialize in multi-unit installations for offices, malls, and commercial establishments."
              },
              {
                q: "Are your technicians certified for hospitals?",
                a: "Yes, our team is trained for healthcare-grade standards and can handle sensitive cooling environments."
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-ice-500/20 to-ice-400/20 border-t border-ice-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready for Professional AC Service in Gandhinagar?
          </h2>
          <p className="text-xl text-ice-100/70 mb-8">
            Contact SK Air Condition today for premium AC service, maintenance, and emergency repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-bold text-lg transition-all"
            >
              Schedule Service
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

export default ACServiceGandhinagar;
