import urls from "@/constants/urls";

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${urls.website.baseUrl}</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/socios</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao/1</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao/2</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao/3</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao/4</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao/5</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/atuacao/6</loc>
        </url>
        <url>
            <loc>${urls.website.baseUrl}/sobre</loc>
        </url>
    </urlset>`;

const createRobots = () => `User-agent: *
Sitemap: ${urls.website.baseUrl}/sitemap.xml
`;

export { createSitemap, createRobots };