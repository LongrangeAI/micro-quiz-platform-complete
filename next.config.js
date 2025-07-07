/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/quizzes/:category',
        destination: '/quizzes/[category]',
      },
    ];
  },
};

module.exports = nextConfig;
