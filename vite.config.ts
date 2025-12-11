import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "shopify-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/shopify" || req.url === "/shopify/") {
            res.writeHead(302, { Location: "/shopify/index.html" });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: "index.html",
        shopify: "shopify/index.html",
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["lucide-react", "sonner"],
          radix: ["@radix-ui/react-dialog", "@radix-ui/react-popover"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
