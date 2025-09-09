import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack:{
    root: __dirname // 현재 디렉토리 root 설정
  }
};

export default nextConfig;
