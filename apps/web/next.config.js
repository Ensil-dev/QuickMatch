/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next", // 빌드 경로를 기본값으로
  reactStrictMode: true,
  transpilePackages: ['@quickmatch/ui-components'],
  output: "standalone", // Vercel에서 standalone 모드 활성화
};

module.exports = nextConfig;
