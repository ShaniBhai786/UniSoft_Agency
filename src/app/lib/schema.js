/* =========================================================
   GLOBAL SERVICE SCHEMA
========================================================= */

export const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "ProfessionalService",

  "@id": "https://unisoftpvt.com/services",

  name: "UniSoft Digital Services",

  url: "https://unisoftpvt.com/services",

  provider: {
    "@id": "https://unisoftpvt.com/",
  },

  image: "https://unisoftpvt.com/logo.png",

  description:
    "UniSoft provides web development, SEO services, AI automation, digital marketing, UI UX design, and custom software development services worldwide.",

  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },

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
          description:
            "Modern MERN stack applications using MongoDB, Express, React, and Node.js.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "Next.js Development",
          description:
            "High-performance Next.js web applications with SEO optimization.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization Services",
          description:
            "Technical SEO, local SEO, on-page optimization, and ranking improvement services.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "WordPress Development",
          description:
            "Custom WordPress websites, themes, and business solutions.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "UI UX Design Services",
          description:
            "Modern user interface and user experience design services.",
        },
      },

      {
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",
          name: "AI Automation Solutions",
          description:
            "AI-powered automation systems and workflow optimization solutions.",
        },
      },
    ],
  },
};

/* =========================================================
   GLOBAL SCHEMAS
========================================================= */

/* =========================================================
   ORGANIZATION SCHEMA
========================================================= */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": "https://unisoftpvt.com/#organization",

  name: "UniSoft",

  url: "https://unisoftpvt.com",

  logo: {
    "@type": "ImageObject",
    url: "https://unisoftpvt.com/logo.png",
  },

  description:
    "UniSoft is a software development and digital marketing company specializing in web development, SEO, AI automation, UI UX design, and business growth solutions.",

  founder: {
    "@type": "Person",
    name: "Roshaan Ahmad",
  },

  sameAs: [
    "https://www.facebook.com/profile.php?id=61568003026936",
    "https://linkedin.com/company/unisoftpvt",
    "https://instagram.com/unisoftpvt",
  ],

  areaServed: "Worldwide",
};

/* =========================================================
   WEBSITE SCHEMA
========================================================= */

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://unisoftpvt.com/#website",

  name: "UniSoft",

  url: "https://unisoftpvt.com",

  publisher: {
    "@id": "https://unisoftpvt.com/#organization",
  },

  potentialAction: {
    "@type": "SearchAction",
    target: "https://unisoftpvt.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* =========================================================
   HOME PAGE SCHEMA
========================================================= */

export const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unisoftpvt.com",
  name: "UniSoft Home",
  url: "https://unisoftpvt.com",
  description:
    "UniSoft provides software development, SEO services, digital marketing, automation, and web development solutions.",
};

/* =========================================================
   SERVICES MAIN PAGE
========================================================= */

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://unisoftpvt.com/services",
  serviceType: "Digital Services",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
    url: "https://unisoftpvt.com/services",
  },
  areaServed: "Worldwide",
  description:
    "UniSoft offers software development, SEO services, UI UX design, automation, and digital marketing services.",
};

/* =========================================================
   SOFTWARE DEVELOPMENT
========================================================= */

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://unisoftpvt.com/services/software-development",
  serviceType: "Software Development",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
    url: "https://unisoftpvt.com/services/software-development",
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
    url: "https://unisoftpvt.com/services/seo",
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
    url: "https://unisoftpvt.com/services/web-development",
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
    url: "https://unisoftpvt.com/services/digital-marketing",
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
    url: "https://unisoftpvt.com/services/ui-ux-design",
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
    url: "https://unisoftpvt.com/services/automation",
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
  url: "https://unisoftpvt.com/about",
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
  url: "https://unisoftpvt.com/contact",
  description:
    "Contact UniSoft for software development, SEO services, web development, automation, and digital marketing services.",
};

/* =========================================================
   TEAM PAGE
========================================================= */

export const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UniSoft Team",
  url: "https://unisoftpvt.com/teams",
  description:
    "Meet the CEOs, software developers, SEO experts, designers, and digital strategists behind UniSoft.",
  founder: [
    {
      "@type": "Person",
      name: "Roshaan Ahmad",
      jobTitle: "CEO",
    },
  ],
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
      url: "https://unisoftpvt.com/logo.png",
    },
  },
  datePublished,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://unisoftpvt.com/blog/${slug}`,
  },
});

export const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "UniSoft Pricing Plans",
  url: "https://unisoftpvt.com/pricing",
  description:
    "Affordable web development, SEO services, AI automation, and digital marketing pricing plans by UniSoft.",
  provider: {
    "@type": "Organization",
    name: "UniSoft",
    url: "https://unisoftpvt.com",
  },

  itemListElement: [
    {
      "@type": "Offer",
      name: "Starter Plan",
      description:
        "Perfect for startups and small businesses looking to establish an online presence.",
      price: "149",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://unisoftpvt.com/pricing",
    },

    {
      "@type": "Offer",
      name: "Business Plan",
      description:
        "Advanced business solutions with SEO optimization and automation features.",
      price: "499",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://unisoftpvt.com/pricing",
    },

    {
      "@type": "Offer",
      name: "Enterprise Plan",
      description:
        "Custom enterprise-grade software, AI systems, and full-scale digital transformation.",
      price: "999",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://unisoftpvt.com/pricing",
    },
  ],
};