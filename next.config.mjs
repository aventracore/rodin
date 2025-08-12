import createMDX from '@next/mdx';
import withPWA from 'next-pwa';

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' }
    ]
  },
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})(withMDX(nextConfig));