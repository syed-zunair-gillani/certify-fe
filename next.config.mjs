/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_STUDIO_DATASET,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        // ✅ This makes root-level slug work
        {
          source: '/centene-provider-outreach',
          destination: '/landing-pages/centene-provider-outreach',
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: '/redirect?pathname=:path*',
        }
      ],
    }
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'host', value: 'certifyos.com' }],
        destination: 'https://www.certifyos.com/:path*',
        permanent: true
      },
    ]
  }
};

export default nextConfig;
