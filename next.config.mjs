/** @type {import('next').NextConfig} */

const nextConfig = {
  // ...existing config...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fra.cloud.appwrite.io",
        pathname: "/v1/storage/buckets/**",
      },
    ],
  },
};

export default nextConfig;
