import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
};

export default nextConfig;
