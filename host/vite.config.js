import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        paymentRemoteApp: "http://localhost:5001/dist/assets/remoteEntry.js",
        walletRemoteApp: "http://localhost:5002/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
