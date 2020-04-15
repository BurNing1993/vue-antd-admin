import axios from 'axios';

const service = axios.create({
});

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.error(error);
  return Promise.reject(error);
});

export default service;
