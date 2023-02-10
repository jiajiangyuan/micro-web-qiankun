import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const Home = () => import("@/views/home/index.vue");
const Profile = () => import("@/views/profile/index.vue");
const routes = [
  {
    path: "/home",
    name: "首页",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  // 判断是否在qiankun环境里，与主应用中activeRule一致
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue/" : "/"
  ),
  routes,
});

export default router;
