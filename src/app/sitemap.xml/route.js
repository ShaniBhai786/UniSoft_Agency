export async function GET() {
  const baseUrl = "https://unisoftpvt.com";

  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: "daily",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/about`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/services`,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/pricing`,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      loc: `${baseUrl}/teams`,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      loc: `${baseUrl}/blogs`,
      changefreq: "daily",
      priority: "0.9",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => ` <url> <loc>${url.loc}</loc> <lastmod>${new Date().toISOString()}</lastmod> <changefreq>${url.changefreq}</changefreq> <priority>${url.priority}</priority> </url>`
      )
      .join("")} </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
