/** @type {import('next').NextConfig} */

const supabaseURL = process.env.SUPABASE_URL;
if (!supabaseURL) console.error("NO SUPABASE URL IN next.config.mjs FILE.");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseURL,
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
