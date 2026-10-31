import type { Config } from "tailwindcss";

const config: Config = {
  // Preflight off + `container` off: Webflow classes (.container, .hidden, ...)
  // share names with Tailwind utilities and must never be overridden.
  corePlugins: { preflight: false, container: false },
  content: [
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // The converted Webflow sections (components/all_components/homepage/*) are
    // deliberately NOT scanned, so Tailwind never generates rules for their class names.
  ],
  theme: { extend: {} },
  plugins: [],
};
export default config;
