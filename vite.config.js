import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/StayEase/",
  server: {
    historyApiFallback: true, // Ensures proper routing on refresh
  },
});
