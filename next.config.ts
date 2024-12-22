import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // https://github.com/user-attachments/assets/1f6bb471-14e8-45e6-bc53-0e5cc1ae3c63
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/assets/**",
      },
    ],
  },
};

export default nextConfig;
