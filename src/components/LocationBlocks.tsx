/**
 * LOCATION-SPECIFIC CONTENT BLOCKS
 * Add these to your homepage (App.tsx) to display Kalol & Gandhinagar info
 * 
 * Import and use:
 * <KalolLocationBlock />
 * <GandhinagarLocationBlock />
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

/**
 * Kalol Service Area Block
 * Add this component to display Kalol-specific content on homepage
 */
export const KalolLocationBlock = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-black/20 rounded-3xl border border-ice-500/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-ice-400" size={28} />
          <h3 className="text-3xl font-black">AC Service in Kalol</h3>
        </div>

        <p className="text-lg text-ice-100/70 mb-6">
          Professional AC repair, service & installation for all Kalol residents and businesses. 
          24/7 emergency service with same-day response available.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="glass p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={20} className="text-ice-400" />
              <span className="font-bold">24/7 Service</span>
            </div>
            <p className="text-ice-100/60">Emergency repairs available anytime, same-day service in most cases</p>
          </div>

          <div className="glass p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={20} className="text-green-400" />
              <span className="font-bold">Expert Team</span>
            </div>
            <p className="text-ice-100/60">Certified technicians with 10+ years experience serving Kalol</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="/ac-repair-kalol"
            className="px-6 py-3 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-bold transition-all"
          >
            Learn More About Kalol Service
          </a>
          <a
            href="tel:+917802984111"
            className="px-6 py-3 border-2 border-ice-400 text-ice-400 hover:bg-ice-400/10 rounded-xl font-bold transition-all"
          >
            Call for Kalol Service
          </a>
        </div>
      </div>
    </motion.section>
  );
};

/**
 * Gandhinagar Service Area Block
 * Add this component to display Gandhinagar-specific content on homepage
 */
export const GandhinagarLocationBlock = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-black/20 rounded-3xl border border-ice-500/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-ice-400" size={28} />
          <h3 className="text-3xl font-black">AC Service in Gandhinagar</h3>
        </div>

        <p className="text-lg text-ice-100/70 mb-6">
          Premium AC service, maintenance & repair for Gandhinagar's corporate, commercial & residential sectors. 
          Trusted by offices, hospitals, malls & residents across all sectors.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="glass p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={20} className="text-ice-400" />
              <span className="font-bold">Corporate Ready</span>
            </div>
            <p className="text-ice-100/60">AMC contracts, zero-downtime service, hospital-grade standards</p>
          </div>

          <div className="glass p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={20} className="text-green-400" />
              <span className="font-bold">All Sectors</span>
            </div>
            <p className="text-ice-100/60">Serving from Sector 1 to 28, all Gandhinagar locations</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="/ac-service-gandhinagar"
            className="px-6 py-3 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-bold transition-all"
          >
            Learn More About Gandhinagar Service
          </a>
          <a
            href="tel:+917802984111"
            className="px-6 py-3 border-2 border-ice-400 text-ice-400 hover:bg-ice-400/10 rounded-xl font-bold transition-all"
          >
            Call for Gandhinagar Service
          </a>
        </div>
      </div>
    </motion.section>
  );
};

/**
 * Combined Service Areas Block
 * Shows both locations with comparison
 */
export const ServiceAreasCombo = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center">
          Serving <span className="text-ice-400">Kalol & Gandhinagar</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kalol */}
          <motion.div
            className="glass p-8 rounded-3xl border border-ice-500/20 hover:border-ice-400/50 transition-all"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-black mb-4 text-ice-300">Kalol Service Area</h3>
            <p className="text-ice-100/70 mb-6">
              Fast, reliable AC repair service for Kalol residents and small businesses. 
              Same-day service available for urgent repairs.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>24/7 Emergency Service</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>Affordable Rates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>Certified Technicians</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>15-Day Warranty</span>
              </li>
            </ul>
            <a
              href="/ac-repair-kalol"
              className="block px-6 py-3 bg-ice-500 hover:bg-ice-400 text-white text-center rounded-xl font-bold transition-all"
            >
              Kalol Service Details
            </a>
          </motion.div>

          {/* Gandhinagar */}
          <motion.div
            className="glass p-8 rounded-3xl border border-ice-500/20 hover:border-ice-400/50 transition-all"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-black mb-4 text-ice-300">Gandhinagar Service Area</h3>
            <p className="text-ice-100/70 mb-6">
              Premium AC service for Gandhinagar's corporate, institutional & residential sectors. 
              Trusted by offices, hospitals, malls.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>Corporate & Hospital Grade</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>AMC Contracts Available</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>Zero Downtime Guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>All Sectors Coverage</span>
              </li>
            </ul>
            <a
              href="/ac-service-gandhinagar"
              className="block px-6 py-3 bg-ice-500 hover:bg-ice-400 text-white text-center rounded-xl font-bold transition-all"
            >
              Gandhinagar Service Details
            </a>
          </motion.div>
        </div>

        {/* Quick Contact */}
        <div className="mt-12 text-center">
          <p className="text-ice-100/60 mb-4">Need service in either location? Contact us now:</p>
          <a
            href="tel:+917802984111"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ice-500 hover:bg-ice-400 text-white rounded-xl font-bold transition-all"
          >
            <Phone size={20} />
            Call 7802984111 (24/7 Available)
          </a>
        </div>
      </div>
    </section>
  );
};

export default {
  KalolLocationBlock,
  GandhinagarLocationBlock,
  ServiceAreasCombo
};
