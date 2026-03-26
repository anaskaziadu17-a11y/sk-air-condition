# SEO-Optimized React Component Structure for AC Services

## Example: Hero Component with SEO Best Practices

```jsx
// src/components/Hero.tsx
import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <header 
      className="hero-section"
      role="banner"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main H1 - Only use ONCE per page */}
        <h1 className="hero-title">
          AC Repair &amp; Service in Ahmedabad
        </h1>
        
        {/* Supporting subheading */}
        <p className="hero-subtitle">
          Fast &amp; Reliable Professional AC Repair | 24/7 Emergency Service | Expert Technicians
        </p>
        
        {/* CTA Button */}
        <button 
          className="cta-button"
          aria-label="Call SK Air Condition for AC repair in Ahmedabad"
        >
          Call Now: +91 7802 984 111
        </button>
      </motion.div>

      {/* Schema markup for LocalBusiness */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SK Air Condition",
            "url": "https://sk-air-condition.vercel.app/",
            "telephone": "+917802984111",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "India"
            }
          })
        }}
      />
    </header>
  );
};

export default Hero;
```

## Services Component with SEO Structure

```jsx
// src/components/Services.tsx
import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "AC Repair Service",
      description: "Professional AC repair for all brands and models in Ahmedabad. Quick diagnosis, affordable rates, guaranteed results.",
      icon: "🔧",
      link: "/services/ac-repair"
    },
    {
      id: 2,
      title: "AC Installation",
      description: "Expert AC installation with proper setup and warranty for residential and commercial spaces in Ahmedabad.",
      icon: "💨",
      link: "/services/ac-installation"
    },
    {
      id: 3,
      title: "AC Maintenance & Cleaning",
      description: "Preventive AC maintenance and deep cleaning to ensure optimal performance and longevity of your air conditioner.",
      icon: "🧹",
      link: "/services/ac-maintenance"
    }
  ];

  return (
    <section 
      className="services-section"
      id="services"
      aria-labelledby="services-heading"
    >
      {/* H2 - Use for main sections */}
      <h2 id="services-heading">Our AC Services in Ahmedabad</h2>
      <p className="section-intro">
        SK Air Condition offers comprehensive air conditioning solutions for your home and business.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <article 
            key={service.id}
            className="service-card"
            itemScope
            itemType="https://schema.org/Service"
          >
            {/* H3 - Use for subsections */}
            <h3 itemProp="name">{service.title}</h3>
            
            <p itemProp="description">
              {service.description}
            </p>

            {/* Schema metadata */}
            <meta itemProp="areaServed" content="Ahmedabad" />
            <meta itemProp="provider" content="SK Air Condition" />

            <a href={service.link} className="learn-more">
              Learn More →
            </a>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h3>Need Professional AC Service in Ahmedabad?</h3>
        <p>Contact SK Air Condition today for immediate assistance</p>
        <a href="tel:+917802984111" className="phone-button">
          📞 Call: +91 7802 984 111
        </a>
      </div>
    </section>
  );
};

export default Services;
```

## Why Choose Us Component with SEO

```jsx
// src/components/WhyChooseUs.tsx
import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    "Expert certified technicians with 10+ years experience",
    "24/7 emergency AC repair service in Ahmedabad",
    "Fast response time - Usually within 1 hour",
    "Transparent pricing with no hidden charges",
    "Satisfaction guarantee or money back",
    "All brands and models serviced"
  ];

  return (
    <section 
      className="why-choose-us"
      aria-labelledby="why-heading"
    >
      <h2 id="why-heading">Why Choose SK Air Condition?</h2>

      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index}>
            ✓ {benefit}
          </li>
        ))}
      </ul>

      {/* FAQ Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why should I choose SK Air Condition for AC repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide expert AC repair service in Ahmedabad with certified technicians, 24/7 availability, fast response, and transparent pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Do you service all AC brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we service all major AC brands and models including LG, Voltas, Whirlpool, Daikin, and more."
                }
              }
            ]
          })
        }}
      />
    </section>
  );
};

export default WhyChooseUs;
```

## Contact Component

```jsx
// src/components/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section 
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Contact SK Air Condition</h2>
      <p>Reach out to us for professional AC repair and service in Ahmedabad</p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>📞 Phone</h3>
          <a href="tel:+917802984111">+91 7802 984 111</a>
        </div>

        <div className="contact-item">
          <h3>💬 WhatsApp</h3>
          <a href="https://wa.me/917802984111">Chat on WhatsApp</a>
        </div>

        <div className="contact-item">
          <h3>📧 Email</h3>
          <a href="mailto:info@sk-air-condition.com">info@sk-air-condition.com</a>
        </div>

        <div className="contact-item">
          <h3>📍 Service Area</h3>
          <p>Ahmedabad, Gujarat, India</p>
        </div>
      </div>

      {/* ContactPoint Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "telephone": "+91-7802-984-111",
            "contactType": "Customer Service",
            "areaServed": "Ahmedabad",
            "availableLanguage": ["en", "gu-IN"]
          })
        }}
      />
    </section>
  );
};

export default Contact;
```

## Best Practices Implemented:

### 1. **Semantic HTML**
- Use `<header>`, `<section>`, `<article>` tags
- Proper heading hierarchy (H1 → H2 → H3)
- Use `<main>` for primary content

### 2. **ARIA Labels**
- `aria-labelledby` linking headings to sections
- `aria-label` on buttons and interactive elements
- `role` attributes where needed

### 3. **Schema Markup**
- Service schema
- LocalBusiness schema
- FAQPage schema
- ContactPoint schema

### 4. **Keywords in Content**
- Naturally include "AC repair in Ahmedabad"
- Use service names in titles and descriptions
- Include location keywords

### 5. **Image Optimization**
```jsx
// Good way to add images:
<img 
  src="/images/ac-service.jpg"
  alt="Professional AC repair technician in Ahmedabad by SK Air Condition"
  width={600}
  height={400}
  loading="lazy"
  className="service-image"
/>
```

### 6. **Internal Linking**
```jsx
// Good for SEO:
<a href="/services">Our AC Services</a>
<a href="/about">About SK Air Condition</a>
<a href="/contact">Contact Us</a>
```

---

## Recommended Meta Tags Helper Function

```jsx
// src/utils/seoHelpers.ts
export const setPageMeta = (title: string, description: string, url: string) => {
  // Update title
  document.title = title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  }

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');

  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDesc) ogDesc.setAttribute('content', description);
  if (ogUrl) ogUrl.setAttribute('content', url);
};

// Usage:
setPageMeta(
  'AC Repair & Service in Ahmedabad | SK Air Condition',
  'Best AC repair and service in Ahmedabad...',
  'https://sk-air-condition.vercel.app/'
);
```

---

## CSS Best Practices for SEO

```css
/* Avoid using display: none for content you want indexed */
/* Google may not index content hidden with display: none */

/* Use these instead: */
.hidden {
  position: absolute;
  left: -9999px;  /* Off-screen but still indexable */
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Readable font sizes (helps with user experience) */
body {
  font-size: 16px;  /* Minimum for mobile readability */
  line-height: 1.5;
  color: #333;
}

/* Clear heading hierarchy */
h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }
```

---

**All these components follow SEO best practices while maintaining your React + Vite + Vercel setup!**
