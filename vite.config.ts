import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
// TODO: type this

export default defineConfig({
  plugins: [vue()],
  resolve: {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  }
}
})
