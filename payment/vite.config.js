import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: "esnext",
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  plugins: [
    react(),
    federation({
      name: "payment-app",
      filename: "remoteEntry.js",
      exposes: {
        "./PaymentApp": "./src/components/PaymentApp.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
