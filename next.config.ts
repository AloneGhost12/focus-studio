import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/focus-studio",
  assetPrefix: "/focus-studio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
