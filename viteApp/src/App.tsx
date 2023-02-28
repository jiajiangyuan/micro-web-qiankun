import "./App.less";
import RouterComponent from "@/router";
import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import dayjs from "dayjs";

dayjs.locale("zh-cn");

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterComponent />
    </ConfigProvider>
  );
}

export default App;
