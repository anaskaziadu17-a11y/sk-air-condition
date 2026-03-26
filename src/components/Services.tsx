import React from 'react';
import { motion } from 'motion/react';

/**
 * Professional Services Gallery Component
 * Displays AC service images with responsive layout and hover effects
 * 
 * Features:
 * - Responsive grid (2 columns on desktop, 1 on mobile)
 * - Lazy loading images
 * - Smooth hover animations
 * - SEO-optimized structure
 * - Tailwind CSS styling
 */

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  altText: string;
}

const Services: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 1,
      title: "AC Filter Cleaning",
      description: "Professional filter cleaning ensures optimal air flow and maintains your AC's efficiency. We use advanced cleaning techniques to remove dust and allergens.",
      image: "/images/ac-filter-cleaning.jpg",
      altText: "Professional AC filter cleaning service in Ahmedabad by SK Air Condition"
    },
    {
      id: 2,
      title: "AC Deep Cleaning Service",
      description: "Complete AC deep cleaning including coils, fins, and internal components. Our thorough service keeps your AC running smoothly and extends its lifespan.",
      image: "/images/ac-deep-cleaning.jpg",
      altText: "AC deep cleaning and maintenance service by SK Air Condition in Ahmedabad"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      id="services"
      aria-labelledby="services-heading"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Our Professional AC Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Expert AC maintenance and cleaning services to keep your air conditioning system running at peak performance. 
            Fast, reliable, and backed by years of professional experience in Ahmedabad.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="group flex flex-col h-full"
              variants={itemVariants}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-6 h-64 sm:h-80 md:h-72 lg:h-80">
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image with lazy loading and optimization */}
                <motion.img
                  src={service.image}
                  alt={service.altText}
                  title={service.title}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Fallback background if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 -z-10 flex items-center justify-center">
                  <div className="text-center text-blue-300">
                    <div className="text-5xl mb-2">🔧</div>
                    <p className="text-sm">Image loading...</p>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-700 w-full md:w-auto"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center p-8 bg-blue-50 rounded-xl border border-blue-200"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional AC Service?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact SK Air Condition today for fast, reliable, and affordable AC repair and maintenance services in Ahmedabad.
          </p>
          <motion.a
            href="tel:+917802984111"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl mr-2">📞</span>
            Call Now: +91 7802 984 111
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
