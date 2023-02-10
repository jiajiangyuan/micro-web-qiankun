import { createApp } from 'vue'
import './style.css'
import store from './store/index'
import App from './App.vue'
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import router from "./router/index.js";

const render = (props?: any) => {
  const app = createApp(App);
  app.use(router);
  app.use(store)
  const id = props?.container?.querySelector("#app") || "#app"; // 避免 id 重复导致微应用挂载失败
  app.mount(id);
};

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log("微应用：bootstrap");
    },
    mount(props) {
      // 获取主应用传入数据
      console.log("微应用：mount", props);
      render(props);
    },
    unmount(props) {
      console.log("微应用：挂载", props);
    },
    update(props) {
      console.log("微应用：update", props);
    },
  });
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(); // 判断是否使用 qiankun ，保证项目可以独立运行
