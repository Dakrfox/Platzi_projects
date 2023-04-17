/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customkey: 'customValue',
  },
  basePath : '/dist',
  compress: true,
  async redirect () {
    return [
      {
        source: '/hola',
        destination: 'https://x.com',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
