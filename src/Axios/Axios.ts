import axios from "axios";
import {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "./type";

class KtAxios {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.requestUse();
    this.responseUse();
  }

  /**
   * 添加请求拦截器
   * @private
   */
  private requestUse() {
    this.instance.interceptors.request.use(
      function (config: InternalAxiosRequestConfig) {
        config.headers.accessToken = "token";
        return config;
      },
      function (error) {
        console.log('发生错误',error)
        return Promise.reject(error);
      },
    );
  }

  responseUse() {
    this.instance.interceptors.response.use(function (response: AxiosResponse) {
      return response;
    },(error) => {
      console.log('发生错误',error)
      return Promise.reject(error);
    });
  }

  request(config:AxiosRequestConfig) {
    return new Promise((resolve,reject) =>{
      this.instance.request(config)
        .then((res:AxiosResponse) =>{
          resolve(res)
        })
        .catch((error) =>{
          reject(error)
        })
    })
  }

  post(config:AxiosRequestConfig) {
    return this.request({
      ...config,
      method:'post'
    })
  }

  get(config:AxiosRequestConfig) {
    return this.request({
      ...config,
      method:'get'
    })
  }
}

export default KtAxios
