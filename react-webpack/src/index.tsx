// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { createRoot } from "react-dom/client";
import App from "./App";
import './App.less'

let root;

const render = (props: { container?: any }) => {
  const { container } = props;
  const appEle = container
    ? container.querySelector("#root")
    : document.querySelector("#root");
  root = createRoot(appEle as HTMLElement)
  root.render(
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
  );
};

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  render(props);
}

// 组件卸载
export async function unmount(props: { container: any }) {
  // createRoot卸载方法
  root.unmount()
}
