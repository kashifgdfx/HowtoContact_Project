/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

 

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;