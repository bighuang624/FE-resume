/* eslint-disable */
import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.BASE_API,  // api的base_url
  baseURL: 'https://www.easy-mock.com/mock/599d6ef2059b9c566dcd47e8/resume/',
  timeout: 5000,                   // 请求超时时间
});

// request 拦截器
service.interceptors.request.use(config => config, (error) => {
  console.log(error);
  return Promise.reject(error);
});

// response 拦截器
service.interceptors.response.use(response => response.data, (error) => {
  console.log(`err${error}`);
  return Promise.reject(error);
});

export default service;
