import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Convert ESM URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../packages/ui/src"),
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
      l3ui: path.resolve(__dirname, "../../packages/ui/src/index.ts"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["l3ui"],
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          // Split l3ui to its own chunk to avoid loading all hooks at once
          l3ui: ["l3ui"],
        },
      },
    },
  },
});
