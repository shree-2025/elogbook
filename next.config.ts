import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Silence workspace root warning by explicitly setting this project's root
    root: __dirname,
  },
};

export default nextConfig;
