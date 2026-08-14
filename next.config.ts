import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  generateBuildId: () => "devarko",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
