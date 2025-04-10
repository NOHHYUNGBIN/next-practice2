import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"], // ✅ 외부 이미지 호스트 허용
  },
};

export default nextConfig;
