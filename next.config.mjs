/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Next 15's build worker cannot serialize ESLint 9 flat-config parsers.
  // Lint remains enforced separately through `npm run lint`.
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
