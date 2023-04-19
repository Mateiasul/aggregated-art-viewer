/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "arweave.net",
      "i.seadn.io",
      "f8n-production-collection-assets.imgix.net",
      "ipfs.pixura.io",
    ],
  },
};

module.exports = nextConfig;
