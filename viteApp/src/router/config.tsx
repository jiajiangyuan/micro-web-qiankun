import React, { lazy } from "react";
import { UserOutlined } from "@ant-design/icons";

const Layouts = lazy(() => import("@/layouts/index")); // 公共页容器
const Home = lazy(() => import("@/pages/Home")); // 首页
const Login = lazy(() => import("@/pages/Login")); // 登录
const BlogList = lazy(() => import("@/pages/Blogs/BlogList")); // 博客列表

export type RoutesType = {
  icon?: React.ReactNode;
  path?: string; // 地址
  label?: string; // 菜单名称
  children?: RoutesType[];
  element?: React.ReactNode; // 渲染模版
  hideMenu?: boolean; // 是否显示到菜单中
  from?: string;
  to?: string; // 跳转地址
  index?: boolean;
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
        label: "博客",
        path: "/blog",
        children: [
          {
            path: "/blog/list",
            label: "博客列表",
            element: <BlogList />,
          },
        ],
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
            label: "与主页面通信",
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
    path: "/login",
    label: "登录",
    element: <Login />,
    hideMenu: true,
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
