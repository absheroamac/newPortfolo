import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Optional: Customize SVGR behavior
      svgrOptions: {
        icon: true, // Scales SVGs like icons (preserves viewBox)
      },
    }),
  ],
});
