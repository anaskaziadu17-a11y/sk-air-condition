/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Droplets, 
  Wind, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users,
  Award,
  Menu, 
  X, 
  ChevronRight,
  Star,
  CheckCircle2
} from 'lucide-react';

// --- Constants ---
const PHONE_NUMBER = "7802984111";
const WHATSAPP_NUMBER = "917802984111";
const OWNER_NAME = "Kazi Saifuddin";
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyqwEHGZtKdctKDQWV88F2w4hxIbRLny-3WOOmYAR7hQi6Y1F8vw7BbVt4ejmqn4d1FXQ/exec";

// --- Components ---

const SnowEffect = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 30 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((i) => (
        <div
          key={i}
          className="snow-particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 7}s`,
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Offers', href: '#offers' },
    { name: 'Services', href: '#services' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ice-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
            <Wind className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            SK <span className="text-ice-400">AIR CONDITION</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-ice-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="glass px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 btn-glow"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-ice-600 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ice-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-ice-400/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-ice-500/20 border border-ice-500/30 text-ice-300 text-sm font-bold mb-6 tracking-widest uppercase">
              Kalol & Gandhinagar's #1 Choice
            </span>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 tracking-tighter">
              Cooling Experts <br />
              <span className="text-[#191919] bg-ice-400 px-6 py-2 rounded-2xl inline-block transform -rotate-2 shadow-[8px_8px_0px_#0ea5e920] mt-2">
                Fast & Reliable
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-ice-100/80 mb-10 max-w-2xl leading-relaxed">
              Keep your AC running smooth & cool this summer with our professional maintenance and repair services.
            </p>

            <div className="glass p-6 md:p-8 rounded-3xl inline-flex flex-col md:flex-row items-center gap-6 mb-12 border-ice-500/30 shadow-[0_0_30px_rgba(14,165,233,0.15)]">
              <div className="flex items-center gap-4">
                <div className="bg-ice-500/20 p-3 rounded-2xl">
                  <Star className="text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-ice-300 font-bold uppercase tracking-wider">Summer Special</p>
                  <p className="text-xl font-black">Dry Service ₹350</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="bg-ice-500/20 p-3 rounded-2xl">
                  <Droplets className="text-ice-400" />
                </div>
                <div>
                  <p className="text-xs text-ice-300 font-bold uppercase tracking-wider">Deep Cleaning</p>
                  <p className="text-xl font-black">Water Wash ₹700</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-ice-500 hover:bg-ice-400 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 btn-glow shadow-lg shadow-ice-500/20"
              >
                <Phone size={24} /> Call Now
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="glass hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle size={24} className="text-green-400" /> WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image / Illustration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-1/2 pointer-events-none"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-ice-500/20 blur-[150px] rounded-full" />
          <Wind className="w-full h-full text-ice-500/10 animate-float" strokeWidth={0.5} />
        </div>
      </motion.div>
    </section>
  );
};

const OfferSection = ({ onBookNow }: { onBookNow: (service: string) => void }) => {
  const offers = [
    {
      title: "AC Dry Service",
      originalPrice: "400",
      currentPrice: "350",
      features: ["Filter Cleaning", "Coil Dusting", "Performance Check"],
      color: "from-ice-600 to-ice-800",
      popular: false
    },
    {
      title: "Water Wash Service",
      originalPrice: "800",
      currentPrice: "700",
      features: ["Deep Chemical Wash", "Outdoor Unit Wash", "Jet Pump Cleaning", "Drain Pipe Cleaning"],
      color: "from-ice-400 to-ice-600",
      popular: true
    }
  ];

  return (
    <section id="offers" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Summer Special <span className="text-orange-500">Offers 🔥</span></h2>
            <p className="text-ice-200/60 text-lg max-w-2xl mx-auto">Get the best cooling performance at unbeatable prices. Limited time offer for this season.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative glass p-8 md:p-12 rounded-[40px] border-2 ${offer.popular ? 'border-ice-400 shadow-[0_0_40px_rgba(14,165,233,0.2)]' : 'border-white/10'}`}
            >
              {offer.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-ice-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-black mb-6">{offer.title}</h3>
              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl md:text-6xl font-black text-ice-300">₹{offer.currentPrice}</span>
                <span className="text-xl text-white/30 line-through mb-2">₹{offer.originalPrice}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {offer.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-ice-100/80">
                    <CheckCircle2 className="text-ice-400 w-5 h-5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onBookNow(offer.title)}
                className={`w-full py-5 rounded-2xl font-black text-center block transition-all bg-ice-500 text-white btn-glow`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Deep Water Wash",
      desc: "High-pressure jet pump cleaning for maximum cooling efficiency.",
      icon: <Droplets className="w-8 h-8" />
    },
    {
      title: "AC Dry Service",
      desc: "Comprehensive dusting and filter cleaning to keep air fresh.",
      icon: <Wind className="w-8 h-8" />
    },
    {
      title: "Gas Refilling",
      desc: "Top-quality refrigerant refilling for instant cooling.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Complete Repair",
      desc: "Expert troubleshooting and repair for all AC brands.",
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Our Expert <span className="text-ice-400">Services</span></h2>
            <p className="text-ice-200/60 text-lg">We handle everything from installation to complex repairs with precision and care.</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="text-ice-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View All Services <ChevronRight />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:bg-ice-500/10 transition-all border-white/5 hover:border-ice-500/30"
            >
              <div className="w-16 h-16 bg-ice-500/10 rounded-2xl flex items-center justify-center text-ice-400 mb-6 group-hover:scale-110 group-hover:bg-ice-500 group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-ice-100/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { label: "Happy Customers", value: "5000+", icon: <Users className="text-ice-400" /> },
    { label: "Years Experience", value: "10+", icon: <Award className="text-ice-400" /> },
    { label: "Satisfaction", value: "100%", icon: <ShieldCheck className="text-ice-400" /> },
    { label: "Service", value: "Doorstep", icon: <MapPin className="text-ice-400" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Trust Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass p-10 md:p-16 rounded-[40px] relative overflow-hidden border-ice-500/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-ice-500/10 blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Why Thousands <br /><span className="text-ice-400">Choose SK Air?</span></h2>
              <p className="text-ice-100/60 text-xl mb-10 max-w-xl leading-relaxed">
                We don't just fix ACs; we build relationships. Our commitment to quality and transparency has made us the leading service provider in the region.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-ice-500/20 rounded-xl flex items-center justify-center text-ice-400 flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Certified Pros</h4>
                    <p className="text-ice-100/40 text-sm">Every technician is background checked & certified.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-ice-500/20 rounded-xl flex items-center justify-center text-ice-400 flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Instant Support</h4>
                    <p className="text-ice-100/40 text-sm">24/7 Emergency assistance for critical repairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 rounded-[32px] flex flex-col items-center justify-center text-center border-white/5 hover:border-ice-500/30 transition-all"
              >
                <div className="mb-4 p-3 bg-ice-500/10 rounded-2xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-ice-100/40 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 glass p-8 rounded-[32px] bg-gradient-to-r from-ice-600/20 to-transparent border-ice-500/20 flex items-center justify-between"
            >
              <div>
                <h4 className="text-xl font-black mb-1">Ready to experience the best?</h4>
                <p className="text-ice-100/60">Book your service today and feel the chill.</p>
              </div>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-ice-500 p-4 rounded-2xl text-white hover:bg-ice-400 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  const areas = ["Kalol", "Gandhinagar", "Mansa", "Adalaj", "Santej", "Chhatral"];

  return (
    <section id="areas" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-ice-500/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Serving <span className="text-ice-400">Nearby Areas</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass px-8 py-4 rounded-2xl text-xl font-bold border-ice-500/20"
              >
                {area}
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-ice-200/60 text-lg">
            We provide doorstep service across all major locations in Kalol and Gandhinagar district.
          </p>
        </div>
      </div>
    </section>
  );
};

const SuccessModal = ({ isOpen, onClose, name }: { isOpen: boolean, onClose: () => void, name: string }) => {
  if (!isOpen) return null;

  const whatsappMsg = `Hello! I just booked a service for ${name}. Please confirm my booking.`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="glass p-10 rounded-[40px] max-w-md w-full text-center border-ice-500/30 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ice-500 to-green-500" />
        
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-400">
          <CheckCircle2 size={48} />
        </div>
        
        <h3 className="text-3xl font-black mb-4 tracking-tighter">Booking Complete!</h3>
        <p className="text-ice-100/60 text-lg mb-8">
          Thanks <span className="text-white font-bold">{name}</span>! Your request has been received. You will receive an SMS confirmation shortly.
        </p>
        
        <div className="space-y-4">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-600/20"
          >
            <MessageCircle size={24} />
            Confirm on WhatsApp
          </a>
          
          <button 
            onClick={onClose}
            className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ContactFooter = ({ formData, setFormData }: { 
  formData: { name: string, phone: string, service: string, address: string },
  setFormData: React.Dispatch<React.SetStateAction<{ name: string, phone: string, service: string, address: string }>>
}) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [lastSubmittedName, setLastSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all fields including address");
      return;
    }

    setStatus('loading');
    setLastSubmittedName(formData.name);

    try {
      // If the user has provided a Google Sheet URL, we send the data
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script requires no-cors for simple POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        setStatus('success');
        setShowModal(true);
        setFormData({ name: '', phone: '', service: 'AC Dry Service', address: '' });
      } else {
        // Fallback: Open WhatsApp with the details
        const message = `*New Booking Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Address:* ${formData.address}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        setStatus('success');
        setShowModal(true);
        setFormData({ name: '', phone: '', service: 'AC Dry Service', address: '' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }

    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      <SuccessModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        name={lastSubmittedName} 
      />
      <footer id="contact" className="pt-24 pb-12 bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-ice-500 rounded-xl flex items-center justify-center shadow-lg shadow-ice-500/30">
                <Wind className="text-white w-8 h-8" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                SK <span className="text-ice-400">AIR CONDITION</span>
              </span>
            </div>
            <h3 className="text-4xl font-black mb-6">Ready to get <span className="text-ice-400">chilled?</span></h3>
            <p className="text-ice-100/60 text-lg mb-10 leading-relaxed">
              Don't let the heat get to you. Contact us today for professional AC service and repair. We guarantee 100% satisfaction and cooling performance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-ice-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-ice-400 font-bold uppercase tracking-widest">Call Us</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-black hover:text-ice-400 transition-colors">
                    +91 {PHONE_NUMBER}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-green-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-green-400 font-bold uppercase tracking-widest">WhatsApp</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in booking an AC service.")}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-black hover:text-green-400 transition-colors"
                  >
                    Chat with {OWNER_NAME}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[40px] border-white/10">
            <h4 className="text-2xl font-black mb-8">Quick Booking</h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ice-300 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-ice-500 focus:outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ice-300 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="98765 43210" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-ice-500 focus:outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ice-300 uppercase tracking-wider">Service Needed</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-ice-500 focus:outline-none transition-all appearance-none"
                >
                  <option className="bg-ice-950" value="AC Dry Service">AC Dry Service</option>
                  <option className="bg-ice-950" value="Water Wash Service">Water Wash Service</option>
                  <option className="bg-ice-950" value="Gas Refilling">Gas Refilling</option>
                  <option className="bg-ice-950" value="Repair / Installation">Repair / Installation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ice-300 uppercase tracking-wider">Your Address</label>
                <textarea 
                  placeholder="Enter your full address here..." 
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-ice-500 focus:outline-none transition-all resize-none" 
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-ice-500 hover:bg-ice-400 text-white rounded-2xl font-black text-lg btn-glow shadow-lg shadow-ice-500/20 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Request Callback'}
              </button>
            </form>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="mb-16 glass p-8 rounded-3xl border-white/5">
          <h4 className="text-xl font-bold mb-4 text-ice-300">Terms & Conditions</h4>
          <div className="text-sm text-ice-100/40 space-y-2 max-h-40 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-ice-500">
            <p>1. All services are provided by SK Air Condition technicians at the customer's doorstep.</p>
            <p>2. Prices mentioned are indicative and may vary based on the AC model and condition.</p>
            <p>3. Gas refilling charges depend on the quantity of gas required and current market rates.</p>
            <p>4. We provide a 15-day service warranty on all repair works.</p>
            <p>5. Spare parts replaced will be charged extra as per actual costs.</p>
            <p>6. Service availability depends on the technician's schedule and location.</p>
            <p>7. SK Air Condition is not responsible for any pre-existing internal damage to the unit.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-ice-100/40 text-sm">
          <p>© 2026 SK Air Condition. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ice-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ice-400 transition-colors">Terms of Service</a>
          </div>
          <p>Designed for High Performance</p>
        </div>
        </div>
      </footer>
    </>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in booking an AC service.")}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-ice-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-ice-500/40"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-ice-950 flex flex-center justify-center items-center"
    >
      <div className="text-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-ice-500 border-t-transparent rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-black tracking-widest uppercase text-ice-300 animate-pulse">Cooling Down...</h2>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Dry Service',
    address: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBooking = (serviceName: string) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <SnowEffect />
      <Navbar />
      
      <main>
        <Hero />
        <OfferSection onBookNow={scrollToBooking} />
        <ServicesSection />
        <TrustSection />
        <ServiceArea />
      </main>
      
      <ContactFooter formData={formData} setFormData={setFormData} />
      <FloatingActions />
    </div>
  );
}
