export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
        ],
        sitemap: "https://unisoftpvt.com/sitemap.xml",
        host: "https://unisoftpvt.com",
    };
}