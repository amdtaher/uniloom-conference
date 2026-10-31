/** @type {import('next').NextConfig} */
const nextConfig = {
  // Make `import img from "@/assets/images/x.jpg"` return a plain URL string,
  // so <img src={img}> and <video poster={img}> work exactly like in Vite.
  images: { disableStaticImages: true },
  // Keep the Google Fonts <link> exactly as in the original HTML (no build-time rewriting).
  optimizeFonts: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|webp|avif|gif|ico|bmp|svg|mp4|webm|ogg|mov)$/i,
      type: "asset/resource",
      generator: { filename: "static/media/[name].[hash:8][ext]" },
    });
    return config;
  },
};

export default nextConfig;
