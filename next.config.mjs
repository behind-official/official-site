/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'behind.rf.gd',
        pathname: '/**', // 모든 경로 허용
      },
    ],
  },
}

export default nextConfig