import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  base: "./",
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, "postcss.config.cjs")
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
