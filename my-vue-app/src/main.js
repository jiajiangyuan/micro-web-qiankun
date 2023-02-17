import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import router from "./router/index.js";
import actions from "./utils/actions";

const render = (props) => {
  const app = createApp(App);
  app.use(router);
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

      props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log("这是主应用传来的值", state, prev);
      }, true); //第二个参数为 true，表示立即执行一次观察者函数

      actions.setActions(props); //子项目的入口文件中设置子应用的全局state

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
