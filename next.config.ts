import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static export in the 'out' directory
  output: "export",
  images: {
    // Enable if using next/image; keeps export simple
    unoptimized: true,
  },
  turbopack: {
    // Silence workspace root warning by explicitly setting this project's root
    root: __dirname,
  },
};

export default nextConfig;
