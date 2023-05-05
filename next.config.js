/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'files.stripe.com',
      "encrypted-tbn0.gstatic.com"
    ],
  },
}

module.exports = nextConfig