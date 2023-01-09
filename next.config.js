/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports={
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  images: {
    domains: ['img.dummyapi.io']
  }
}
