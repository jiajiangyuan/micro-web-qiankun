import React, { Suspense } from "react";
import {
  Route,
  Navigate,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";
import { Spin } from "antd";
import { routes } from "./config";

const RouterComponent = () => {
  const renderRouter = (router: any[]) => {
    return router.map((item, index) => {
      if (!item.path && !item.index) {
        return (
          <Route
            key={item.from}
            path={item.from}
            element={<Navigate to={item.to} replace />}
          />
        );
      }

      const element = item.children && <Outlet />;

      return (
        <Route
          key={item.path || index}
          path={item.path || null}
          index={!!item.index}
          element={item.element ? item.element : element}
          {...(item.props = {})}
        >
          {item.children && renderRouter(item.children)}
        </Route>
      );
    });
  };
  const list = renderRouter(routes);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin></Spin>}>
        <Routes>{list}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterComponent;
