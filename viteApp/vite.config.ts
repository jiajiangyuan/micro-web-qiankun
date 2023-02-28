import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
    open: true,
    proxy: {
      // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      // 使用 proxy 实例
      "/api": {
        target: "http://dev.salecenter.hualala.com:9000/",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, "/api");
        },
        // configure: (proxy, options) => {
        //   // proxy 是 'http-proxy' 的实例
        //   console.log(proxy);
        //   console.log(options);
        // },
      },
      // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      "/socket.io": {
        target: "ws://localhost:5174",
        ws: true,
      },
    },
  },
  resolve: {
    //设置路径别名
    alias: {
      "@": resolve(__dirname, "src"),
      "*": resolve(""),
    },
  },
});
