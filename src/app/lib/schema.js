export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": "https://unisoftpvt.com/#organization",

  name: "UniSoft Pvt Ltd",

  alternateName: "UniSoft",

  url: "https://unisoftpvt.com",

  logo: {
    "@type": "ImageObject",
    url: "https://unisoftpvt.com/logo.png",
  },

  image: "https://unisoftpvt.com/og-image.png",

  description:
    "UniSoft Pvt Ltd is a global software development and digital transformation company specializing in MERN stack development, Next.js, React, SEO, UI/UX design, WordPress, Shopify, AI automation, and business growth solutions.",

  email: "mailto:unisoftpvt@gmail.com",

  telephone: "+1-928-438-3214",

  foundingDate: "2020",

  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],

  knowsAbout: [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Custom Software Development",
  "Enterprise Software Solutions",
  "Business Automation",
  "AI Automation",
  "AI Agents",
  "AI Chatbots",
  "CRM Development",
  "ERP Solutions",
  "SaaS Development",
  "Cloud Applications",
  "API Development",
  "REST API",
  "GraphQL",
  "Database Architecture",
  "MongoDB",
  "MySQL",
  "PostgreSQL",

  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "MERN Stack",
  "Tailwind CSS",

  "Responsive Web Design",
  "UI UX Design",
  "User Experience Design",
  "User Interface Design",
  "Figma Design",
  "Dashboard Design",

  "SEO",
  "Technical SEO",
  "On Page SEO",
  "Off Page SEO",
  "Local SEO",
  "Ecommerce SEO",
  "SEO Audits",
  "Google Search Console",
  "Google Analytics",

  "Digital Marketing",
  "Social Media Marketing",
  "Meta Ads",
  "Facebook Ads",
  "Instagram Ads",
  "Google Ads",
  "Lead Generation",
  "Conversion Optimization",
  "Brand Strategy",

  "Content Marketing",
  "Copywriting",
  "Email Marketing",
  "Marketing Funnels",
  "Performance Marketing",

  "WordPress",
  "Shopify",
  "Ecommerce Development",
  "WooCommerce",
  "Payment Gateway Integration",

  "Web Application Development",
  "Mobile App Development",
  "Progressive Web Apps",
  "Landing Page Development",

  "Cyber Security",
  "Website Optimization",
  "Website Speed Optimization",
  "Hosting Solutions",
  "Vercel Deployment",

  "Graphic Design",
  "Brand Identity Design",
  "Logo Design",
  "Video Editing",
  "Video Ads",

  "Software Company USA",
  "Software Company Pakistan",
  "Software Company UK",
  "Software Company Canada",

  "Web Development Agency",
  "SEO Agency",
  "Digital Agency",
  "Technology Solutions",

  "UniSoft",
  "UniSoft Pvt Ltd",
  "UniSoft SEO",
  "UniSoft Digital Marketing",
  "UniSoft Web Development",
  "UniSoft AI Automation",
],
  sameAs: [
    "https://www.facebook.com/unisoftpvt",
    "https://www.linkedin.com/company/unisoft-pvt-ltd",
    "https://www.instagram.com/unisoftpvt",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-928-438-3214",
    contactType: "customer support",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://unisoftpvt.com/#website",

  url: "https://unisoftpvt.com",

  name: "UniSoft Pvt Ltd",

  description:
    "Professional software development, SEO, AI automation, and digital marketing solutions.",

  publisher: {
    "@id": "https://unisoftpvt.com/#organization",
  },

  inLanguage: "en-US",

  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://unisoftpvt.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "ProfessionalService",

  "@id": "https://unisoftpvt.com/#services",

  name: "UniSoft Digital Services",

  provider: {
    "@id": "https://unisoftpvt.com/#organization",
  },

  areaServed: "Worldwide",

  serviceType: [
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "AI Automation",
    "Business Automation",
    "UI UX Design",
    "Meta Ads",
    "Google Ads",
    "Custom Software Development",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "UniSoft Services",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MERN Stack Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify Store Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation Solutions",
        },
      },
    ],
  },
};