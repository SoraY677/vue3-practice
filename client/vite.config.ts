import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const componentsDir = path.resolve(__dirname, "src", "components");
console.log(componentsDir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@atoms": path.resolve(componentsDir, "atoms"),
      "@molecules": path.resolve(componentsDir, "molecules"),
      "@organisms": path.resolve(componentsDir, "organisms"),
      "@templates": path.resolve(componentsDir, "templates"),
      "@pages": path.resolve(componentsDir, "pages"),
    },
  },
});
