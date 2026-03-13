import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portifolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
