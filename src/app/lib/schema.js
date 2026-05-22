// export const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",

//   "@id": "https://unisoftpvt.com/#organization",

//   name: "UniSoft Pvt Ltd",

//   alternateName: "UniSoft",

//   url: "https://unisoftpvt.com",

//   logo: {
//     "@type": "ImageObject",
//     url: "https://unisoftpvt.com/logo.png",
//   },

//   image: "https://unisoftpvt.com/og-image.png",

//   description:
//     "UniSoft Pvt Ltd is a global software development and digital transformation company specializing in MERN stack development, Next.js, React, SEO, UI/UX design, WordPress, Shopify, AI automation, and business growth solutions.",

//   email: "mailto:unisoftpvt@gmail.com",

//   telephone: "+1-928-438-3214",

//   foundingDate: "2020",

//   areaServed: [
//     {
//       "@type": "Country",
//       name: "United States",
//     },
//     {
//       "@type": "Country",
//       name: "Pakistan",
//     },
//     {
//       "@type": "Country",
//       name: "United Kingdom",
//     },
//     {
//       "@type": "Country",
//       name: "Canada",
//     },
//   ],

//   knowsAbout: [
//   "Web Development",
//   "Frontend Development",
//   "Backend Development",
//   "Full Stack Development",
//   "Custom Software Development",
//   "Enterprise Software Solutions",
//   "Business Automation",
//   "AI Automation",
//   "AI Agents",
//   "AI Chatbots",
//   "CRM Development",
//   "ERP Solutions",
//   "SaaS Development",
//   "Cloud Applications",
//   "API Development",
//   "REST API",
//   "GraphQL",
//   "Database Architecture",
//   "MongoDB",
//   "MySQL",
//   "PostgreSQL",

//   "React",
//   "Next.js",
//   "Node.js",
//   "Express.js",
//   "JavaScript",
//   "TypeScript",
//   "Python",
//   "MERN Stack",
//   "Tailwind CSS",

//   "Responsive Web Design",
//   "UI UX Design",
//   "User Experience Design",
//   "User Interface Design",
//   "Figma Design",
//   "Dashboard Design",

//   "SEO",
//   "Technical SEO",
//   "On Page SEO",
//   "Off Page SEO",
//   "Local SEO",
//   "Ecommerce SEO",
//   "SEO Audits",
//   "Google Search Console",
//   "Google Analytics",

//   "Digital Marketing",
//   "Social Media Marketing",
//   "Meta Ads",
//   "Facebook Ads",
//   "Instagram Ads",
//   "Google Ads",
//   "Lead Generation",
//   "Conversion Optimization",
//   "Brand Strategy",

//   "Content Marketing",
//   "Copywriting",
//   "Email Marketing",
//   "Marketing Funnels",
//   "Performance Marketing",

//   "WordPress",
//   "Shopify",
//   "Ecommerce Development",
//   "WooCommerce",
//   "Payment Gateway Integration",

//   "Web Application Development",
//   "Mobile App Development",
//   "Progressive Web Apps",
//   "Landing Page Development",

//   "Cyber Security",
//   "Website Optimization",
//   "Website Speed Optimization",
//   "Hosting Solutions",
//   "Vercel Deployment",

//   "Graphic Design",
//   "Brand Identity Design",
//   "Logo Design",
//   "Video Editing",
//   "Video Ads",

//   "Software Company USA",
//   "Software Company Pakistan",
//   "Software Company UK",
//   "Software Company Canada",

//   "Web Development Agency",
//   "SEO Agency",
//   "Digital Agency",
//   "Technology Solutions",

//   "UniSoft",
//   "UniSoft Pvt Ltd",
//   "UniSoft SEO",
//   "unisoft seo",
//   "UniSoft Digital Marketing",
//   "UniSoft Web Development",
//   "UniSoft AI Automation",
// ],
//   sameAs: [
//     "https://www.facebook.com/unisoftpvt",
//     "https://www.linkedin.com/company/unisoft-pvt-ltd",
//     "https://www.instagram.com/unisoftpvt",
//   ],

//   contactPoint: {
//     "@type": "ContactPoint",
//     telephone: "+1-928-438-3214",
//     contactType: "customer support",
//     areaServed: "Worldwide",
//     availableLanguage: ["English"],
//   },
// };

// export const websiteSchema = {
//   "@context": "https://schema.org",

//   "@type": "WebSite",

//   "@id": "https://unisoftpvt.com/#website",

//   url: "https://unisoftpvt.com",

//   name: "UniSoft Pvt Ltd",

//   description:
//     "Professional software development, SEO, AI automation, and digital marketing solutions.",

//   publisher: {
//     "@id": "https://unisoftpvt.com/#organization",
//   },

//   inLanguage: "en-US",

//   potentialAction: {
//     "@type": "SearchAction",
//     target:
//       "https://unisoftpvt.com/search?q={search_term_string}",
//     "query-input": "required name=search_term_string",
//   },
// };
// export const faqSchema = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [
//     {
//       "@type": "Question",
//       "name": "What services does UniSoft offer?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "UniSoft offers software development, SEO services, UI/UX design, automation, and digital marketing solutions."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Is UniSoft a software development company?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes, UniSoft is a professional software development company building web applications, automation tools, and enterprise solutions."
//       }
//     }
//   ]
// };

// export const softwareSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   serviceType: "Software Development",
//   provider: {
//     "@type": "Organization",
//     name: "UniSoft",
//   },
// };

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
// lib/schema.js

/* =========================================================
   GLOBAL SCHEMAS
========================================================= */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UniSoft",
  url: "https://unisoft.com",
  logo: "https://unisoft.com/logo.png",
  description:
    "UniSoft is a software development and digital marketing company specializing in web development, SEO, UI UX design, automation, and business growth solutions.",
  sameAs: [
    "https://facebook.com/unisoft",
    "https://linkedin.com/company/unisoft",
    "https://instagram.com/unisoft",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UniSoft",
  url: "https://unisoft.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://unisoft.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* =========================================================
   HOME PAGE SCHEMA
========================================================= */

export const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "UniSoft Home",
  url: "https://unisoft.com",
  description:
    "UniSoft provides software development, SEO, digital marketing, automation, and web development solutions.",
};

/* =========================================================
   SERVICES MAIN PAGE
========================================================= */

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Services",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "UniSoft offers software development, SEO, UI UX design, automation, and digital marketing services.",
};

/* =========================================================
   SOFTWARE DEVELOPMENT
========================================================= */

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "Custom software development services for startups, enterprises, and growing businesses.",
};

/* =========================================================
   SEO SERVICES
========================================================= */

export const seoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SEO Services",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "Professional SEO services including technical SEO, local SEO, keyword research, and ranking optimization.",
};

/* =========================================================
   WEB DEVELOPMENT
========================================================= */

export const webDevelopmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "Responsive website and web application development services using React, Next.js, and modern technologies.",
};

/* =========================================================
   DIGITAL MARKETING
========================================================= */

export const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "Digital marketing solutions including social media marketing, paid advertising, and lead generation.",
};

/* =========================================================
   UI UX DESIGN
========================================================= */

export const uiuxSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "UI UX Design",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "Modern UI UX design services focused on user experience, engagement, and conversion optimization.",
};

/* =========================================================
   AUTOMATION SOLUTIONS
========================================================= */

export const automationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Automation Solutions",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
  },
  areaServed: "Worldwide",
  description:
    "Business automation systems, AI integrations, workflow automation, and smart operational solutions.",
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About UniSoft",
  url: "https://unisoft.com/about",
  description:
    "Learn more about UniSoft, our mission, vision, technologies, and professional digital services.",
};

/* =========================================================
   CONTACT PAGE
========================================================= */

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact UniSoft",
  url: "https://unisoft.com/contact",
  description:
    "Contact UniSoft for software development, SEO, web development, automation, and digital marketing services.",
};

/* =========================================================
   TEAM PAGE
========================================================= */

export const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UniSoft Team",
  url: "https://unisoft.com/team",
  description:
    "Meet the professional software developers, SEO experts, designers, and strategists behind UniSoft.",
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does UniSoft provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UniSoft provides software development, SEO services, web development, UI UX design, automation, and digital marketing solutions.",
      },
    },

    {
      "@type": "Question",
      name: "Does UniSoft offer SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, UniSoft offers professional SEO services including technical SEO, local SEO, and keyword optimization.",
      },
    },

    {
      "@type": "Question",
      name: "What technologies does UniSoft use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UniSoft uses React, Next.js, Node.js, MongoDB, Tailwind CSS, and modern scalable technologies.",
      },
    },
  ],
};

/* =========================================================
   BLOG ARTICLE SCHEMA GENERATOR
========================================================= */

export const articleSchema = ({
  title,
  description,
  slug,
  image,
  datePublished,
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image,
  author: {
    "@type": "Organization",
    name: "UniSoft",
  },
  publisher: {
    "@type": "Organization",
    name: "UniSoft",
    logo: {
      "@type": "ImageObject",
      url: "https://unisoft.com/logo.png",
    },
  },
  datePublished,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://unisoft.com/blog/${slug}`,
  },
});