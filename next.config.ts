import type { NextConfig } from "next";

// GitHub Pages project site: https://<username>.github.io/Singer-Songwriter-Website-Client/
const basePath = process.env.NODE_ENV === "production" ? "/Singer-Songwriter-Website-Client" : "";
const assetPrefix = process.env.NODE_ENV === "production" ? "/Singer-Songwriter-Website-Client/" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: assetPrefix || undefined,
  eslint: { ignoreDuringBuilds: true },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
