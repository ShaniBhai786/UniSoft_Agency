import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import { organizationSchema, websiteSchema } from "./lib/schema.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UniSoft - Software Development, IT Training, and Digital Marketing</title>
        <meta name="description" content="UniSoft provides professional software development, website design, SEO services, digital marketing, and business automation solutions to help companies grow faster and smarter in the digital world." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
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