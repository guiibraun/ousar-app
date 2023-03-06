/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: 'export',
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
