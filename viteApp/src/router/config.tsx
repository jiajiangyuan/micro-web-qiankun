import React, { lazy } from "react";
import { UserOutlined } from "@ant-design/icons";

const Layouts = lazy(() => import("@/layouts/index"));
const Home = lazy(() => import("@/pages/Home"));

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
    path: "/",
    element: <Layouts />,
    icon: <UserOutlined />,
    label: "首页",
    children: [
      {
        from: "/",
        to: "/home",
      },
      {
        label: "首页",
        path: "/home",
        element: <Home />,
      },
      {
        path: "/vue",
        label: "Vue",
        children: [
          {
            path: "/vue/home",
            label: "Vue-home",
          },
          {
            path: "/vue/profile",
            label: "Vue-profile",
          },
        ],
      },
      {
        path: "/vue-ts",
        label: "Vue-Ts",
        children: [
          {
            path: "/vue-ts/vue-home",
            label: "vue-ts-home",
          },
          {
            path: "/vue-ts/vue-profile",
            label: "vue-ts-profile",
          },
        ],
      },
      {
        path: "/react-app",
        label: "react-app",
        children: [
          {
            path: "/react-app/home",
            label: "react-app-home",
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    label: "未找到页面",
    element: <div>404</div>,
    hideMenu: true,
  },
  {
    from: "*",
    to: "/404",
    hideMenu: true,
  },
];
