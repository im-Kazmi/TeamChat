/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "uploadthing.com", pathname: "" }],
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};
