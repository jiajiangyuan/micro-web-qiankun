import React, { lazy } from "react";
import { UserOutlined } from "@ant-design/icons";

const Home = lazy(() => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ "@/pages/Home"));

export type RoutesType = {
  icon?: React.ReactNode;
  path?: string; // 地址
  label?: string; // 菜单名称
  children?: RoutesType[];
  element?: React.ReactNode; // 渲染模版
  hideMenu?: boolean; // 是否显示到菜单中
  from?: string;
  to?: string; // 跳转地址
};

export const routes: RoutesType[] = [
  {
    label: "首页",
    path: "/home",
    element: <Home />,
  }
];
