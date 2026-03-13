import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isso gera a pasta 'out' com o site estático
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no GitHub Pages
  },
};

module.exports = nextConfig;