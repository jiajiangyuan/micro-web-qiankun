import React, { Suspense } from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import { Spin } from "antd";
import { routes } from "./config";

// @ts-ignore
const isRouter = window.__POWERED_BY_QIANKUN__


const RouterComponent = () => {
  const renderRouter = (router: any[]) => {
    return router.map((item, index) => {
      if (!item.path) {
        return (
            <Route
                key={index}
                path={item.from}
                element={<Navigate to={item.to} replace />}
            />
        );
      }

      return (
          <Route
              key={index}
              path={item.path}
              element={item.element ? item.element : null}
              {...(item.props = {})}
          >
            {item.children && renderRouter(item.children)}
          </Route>
      );
    });
  };

  return (
    <BrowserRouter basename={isRouter ? '/react-app/' : '/'}>
      <Suspense fallback={<Spin>loading</Spin>}>
        <Routes>{renderRouter(routes)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterComponent;
