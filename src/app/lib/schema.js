export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UniSoft Pvt Ltd",
  url: "https://unisoftpvt.com",
  logo: "https://unisoftpvt.com/logo.png",
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
  description:
    "UniSoft Pvt Ltd is a global software development and digital marketing company specializing in MERN stack, Next.js, React, WordPress, Shopify, SEO, UI/UX design, and AI automation.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UniSoft Pvt Ltd",
  url: "https://unisoftpvt.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://unisoftpvt.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development & Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "UniSoft Pvt Ltd",
    url: "https://unisoftpvt.com",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UniSoft Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development (MERN, Next.js, React)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Digital Marketing Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress & Shopify Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design Services",
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