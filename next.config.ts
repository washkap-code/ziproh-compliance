import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @react-pdf/renderer uses Node.js native APIs — must not be bundled by webpack
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;
