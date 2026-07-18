/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
  // Next 15's build worker cannot serialize ESLint 9 flat-config parsers.
  // Lint remains enforced separately through `npm run lint`.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
