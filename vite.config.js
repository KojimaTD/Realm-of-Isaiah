import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


const repoName = "My-Portfolio"; 

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
