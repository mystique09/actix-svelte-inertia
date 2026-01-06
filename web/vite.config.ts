import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  server: {
    proxy: {
      "/inertia": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
      },
      "/inertia-version": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
      },
    },
  },
});
