import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // to resolve the problem of absolute paths. now i can use ... from 'src/assets/logo.png'
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
