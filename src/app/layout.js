import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import { organizationSchema, websiteSchema } from "./lib/schema.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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