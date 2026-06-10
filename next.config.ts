import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pdfkit uses Node.js native APIs and bundled font data — must not be bundled by webpack
  serverExternalPackages: ["pdfkit"],
};

export default nextConfig;
