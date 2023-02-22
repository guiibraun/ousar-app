/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-736202-3293812.cloudwaysapps.com',
      },
    ],
  },
}

module.exports = nextConfig
