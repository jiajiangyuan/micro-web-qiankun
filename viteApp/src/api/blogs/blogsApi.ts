import fetch from "@/lib/fetch";

// 博客列表
export const blogsList = (param?: any) => {
  return fetch.get("/blog/list", { ...param });
};

// 博客新建
export const blogNew = (param?: any) => {
  return fetch.post("/blog/new", { ...param });
};

// 博客更新
export const blogUpdate = (param?: any) => {
  return fetch.post("/blog/update", { ...param });
};

// 博客删除
export const blogDel = (param?: any) => {
  return fetch.post("/blog/delete", { ...param });
};
