/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/your-repo-name", // Change this
    images: {
        unoptimized: true,
      },};

export default nextConfig;
