import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "Realm-of-Isaiah"; 

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
