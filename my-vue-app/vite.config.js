import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";
const useDevMode = true; // useDevMode = true 时不开启热更新

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("vueApp", { useDevMode }), // AAA中是子应用名，主应用注册时AppName需保持一致
  ],
  server: {
    port: 5800,
    proxy: {
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
      // 使用 proxy 实例
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },
      // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      "/socket.io": {
        target: "ws://localhost:5174",
        ws: true,
      },
    },
    origin: 'http://localhost:5800',  //项目baseUrl，解决主应用中出现静态地址404问题
  },
  resolve: {
    //设置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "*": resolve(""),
    },
  },
});
