export async function GET() {
  const baseUrl = "https://unisoftpvt.com";

  const urls = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/tech",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
        <url>
          <loc>${baseUrl}${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

import { blogs } from "./blogs/data";

export default function sitemap() {
  const blogUrls = blogs.map((blog) => ({
    url: `https://unisoftpvt.com/blogs/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://unisoftpvt.com",
      lastModified: new Date(),
    },
    {
      url: "https://unisoftpvt.com/blogs",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}