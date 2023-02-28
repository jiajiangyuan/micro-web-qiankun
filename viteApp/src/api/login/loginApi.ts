import fetch from "@/lib/fetch";

// 用户登录
export const userLogin = (param?: any) => {
  return fetch.post("/user/login", { ...param });
};
