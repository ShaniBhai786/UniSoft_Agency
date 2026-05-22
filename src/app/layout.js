import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import { organizationSchema, websiteSchema } from "./lib/schema.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>UniSoft - Software Development, SEO & Digital Marketing Agency</title>

  <meta
    name="description"
    content="UniSoft is a professional software development company offering web development, SEO services, UI/UX design, automation, and digital marketing solutions to grow your business online."
  />

  <meta
    name="keywords"
    content="software development company, web development, SEO agency, digital marketing services, UI UX design, automation solutions, Next.js development, React developers"
  />

  <link rel="canonical" href="https://unisoft.com" />

  {/* Open Graph (Facebook / LinkedIn SEO) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="UniSoft - Software & Digital Growth Agency" />
  <meta
    property="og:description"
    content="We build scalable software, SEO systems, and automation tools to grow businesses globally."
  />
  <meta property="og:url" content="https://unisoft.com" />
  <meta property="og:image" content="/og-image.jpg" />

  {/* Twitter SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="UniSoft - Software Development Company" />
  <meta
    name="twitter:description"
    content="Grow your business with UniSoft software, SEO, and automation services."
  />

  <link rel="icon" href="/favicon.ico" />
  <link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
  rel="stylesheet"
/>
</head>
      <body>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}