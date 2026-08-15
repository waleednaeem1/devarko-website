import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  generateBuildId: () => "devarko-au",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
