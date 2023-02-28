import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { message } from "antd";

export class Fetch {
  private baseConfig: AxiosRequestConfig = {
    baseURL: "/api",
    headers: {},
    timeout: 30000,
  };

  // axios实例
  private instance: AxiosInstance = axios.create(this.baseConfig);

  /**
   * 清除请求参数中的 null 和 undefined 值
   * @param params 请求参数
   * @returns 处理后的参数
   */
  private static clearErrParams(params: any) {
    // 如果是formdData类型；不需要特殊处理
    if (params instanceof FormData) {
      return params;
    }
    const resultParams: any = {};
    const keys = Object.keys(params);
    for (let i = 0; i < keys.length; i++) {
      // eslint-disable-next-line
      if (params[keys[i]] !== null && params[keys[i]] !== undefined) {
        resultParams[keys[i]] = params[keys[i]];
      }
    }
    return resultParams;
  }

  public constructor() {
    this.setReqInterceptors();
    this.setResnterceptors();
  }

  // get请求
  public get = (
    url: string,
    data: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<any> => {
    return this.instance({
      ...{ url, method: "get", params: Fetch.clearErrParams(data) },
      ...config,
    });
  };

  // post请求
  public post = (
    url: string,
    data: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<any> => {
    const { headers = {}, ...otherConfig } = config;
    return this.instance({
      headers: {
        // accesstoken: getToken(),
        ...headers,
      },
      url,
      method: "post",
      data: Fetch.clearErrParams(data),
      ...otherConfig,
    });
  };

  // 请求拦截器
  private setReqInterceptors = () => {
    this.instance.interceptors.request.use(
      (config: any) => {
        return config;
      },
      (err: any) => {
        message.error("请求失败");
        return Promise.reject(err);
      }
    );
  };

  // 响应拦截器
  private setResnterceptors = () => {
    this.instance.interceptors.response.use(
      (res: { status: any; data: any; config: any }) => {
        const { status, data, config } = res;
        if (status === 200) {
          if (data.error_code === 0) {
            return data;
          } else {
            let msg = "";

            switch (data.error_code) {
              case 1711301001:
                msg = "登录失效";
                setTimeout(() => {
                  window.location.href = "/login";
                }, 500);
                break;
              default:
                msg =
                  typeof data.message === "string"
                    ? data.message
                    : "请求错误，请联系管理员";
            }
            // 这里可能有formData情况；使用try catch
            try {
              const requestConfig = JSON.parse(config.data);

              !requestConfig.specialToast && message.error(msg);

              return {
                ...data,
                message: msg,
              };
            } catch (err) {
              message.error(msg);
              return data;
            }
          }
        }
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );
  };
}

export default new Fetch();
