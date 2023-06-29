/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiKey: 'f6780b750dmsh73629311abdc462p1346aejsnbc316f87258c',
       },
     images: {
         domains: ['i.pinimg.com', 'image.cnbcfm.com']
     },
     eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
 }


module.exports = nextConfig
