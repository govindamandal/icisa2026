/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'govindamandal.github.io',
      port: '',
      pathname: '/icisa2026/assets/**',
      search: ''
    }]
  }
};

export default nextConfig;
