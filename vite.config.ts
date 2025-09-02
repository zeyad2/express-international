import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {},
  },
  plugins: [react()],
  publicDir: "src/public",
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["react-globe.gl"],
  },
  server: {
    historyApiFallback: true,
  },
});
