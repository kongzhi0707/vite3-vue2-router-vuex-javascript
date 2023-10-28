import axios from 'axios';

// 创建请求实列
const instance = axios.create({
  baseURL: '/api',
  // 指定请求超时的毫秒数
  timeout: 3000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

// 前置拦截器 (发起请求之前的拦截)
instance.interceptors.request.use(
  (config) => {
    /**
     * 这里一般会携带前台的参数发送给后台，比如下面如下代码
     * const token = getToken();
     * if (token) {
     *   config.headers.token = token;
     * }
     */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器 (获取响应时的拦截)

instance.interceptors.response.use(
  (response) => {
    /**
     * 根据我们的项目实际情况对 response 和 error 做处理
     */
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

// 导出常用的函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url, data = {}, params = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url, params = {}) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = (url, data = {}, params = {}) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = (url, params = {}) => {
  return instance({
    method: 'delete',
    url,
    params,
  });
};

export default instance;
