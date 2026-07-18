import { blogPosts, SITE_URL, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const escapeXml = (value) =>
  value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '\"': "&quot;",
  })[character]);

export function GET() {
  const items = blogPosts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blogs/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blogs/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Sartaj Alam — Web Development &amp; AI Blog</title>
        <link>${SITE_URL}/blogs</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en-IN</language>
        <lastBuildDate>${new Date(blogPosts[0].date).toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
