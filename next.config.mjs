/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['picturesforfaiz.s3.us-east-2.amazonaws.com'], // ✅ your S3 bucket domain
    },
  };
  
  export default nextConfig;
  