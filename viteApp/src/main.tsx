import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerMicroApps } from "qiankun";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 注册子应用
registerMicroApps([
  {
    name: "vue-app", // package.json name
    entry: "//localhost:5800", // 入口地址
    container: "#container", // 子元素渲染dom
    activeRule: "/vue", // 匹配路由
  },
  {
    name: "my-vue-app-v3",
    entry: "//localhost:5900",
    container: "#container",
    activeRule: "/vue-ts",
  },
  {
    name: "react-webpack",
    entry: "//localhost:5991",
    container: "#container",
    activeRule: "/react-app",
  },
]);
