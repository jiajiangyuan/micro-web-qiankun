import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    qiankun("vueAppTs", { useDevMode: true }), // AAA中是子应用名，主应用注册时AppName需保持一致
  ],
  server: {
    port: 5900,
  },
  resolve: {
    //设置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "*": resolve(""),
    },
  },
})
