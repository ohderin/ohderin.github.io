import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
