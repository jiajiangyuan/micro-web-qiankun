import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { start } from "qiankun";
import "./index.less";
import { routes, RoutesType } from "@/router/config";
const { Header, Sider, Content } = Layout;

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menus, setMenus] = useState<any[]>([]);
  const [selected, setSelect] = useState<string>(location.pathname);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const list = routes.find((item) => item.path === "/");
    const menu = renderMenu(list?.children).filter((item) => item);
    console.log(menu);
    setMenus(menu);
    // 启动qiankun
    start({
      sandbox: true, // 样式隔离
    });
  }, []);

  const renderMenu = (list?: RoutesType[]): any[] => {
    if (!list) return [];

    return list.map((item) => {
      if (item.children) {
        return {
          key: item.path,
          icon: item.icon || null,
          label: item.label || item.path,
          children: renderMenu(item.children),
        };
      }

      if (item.path) {
        return {
          key: item.path,
          icon: item.icon || null,
          label: item.label || "",
        };
      }

      return null;
    });
  };

  const onSelect = ({ key }: any) => {
    setSelect(key);
    navigate(key);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={[selected]}
          defaultSelectedKeys={[selected]}
          items={menus}
          inlineCollapsed={false}
          onSelect={onSelect}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
          {/*设置子应用dom*/}
          <div id="container"></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
