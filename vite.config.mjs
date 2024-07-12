import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  server: {
    port: process.env.PORT || 3000
  },
  plugins: [react()],
  envPrefix: "VITE_"
});
