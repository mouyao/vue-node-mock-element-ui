/**
 * Created by jerry on 2017/6/9.
 */
import axios from 'axios'
import {bus} from '../bus.js'

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头

//添加一个请求拦截器
 axios.interceptors.request.use(function (config) {
  console.dir(config);
   return config;
 }, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data && response.data.errcode) {
    if (parseInt(response.data.errcode) === 40001) {
      //未登录
      bus.$emit('goto', '/login')
    }
  }

  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

//基地址
let base = '';  //接口代理地址参见：config/index.js中的proxyTable配置
let apiUrl="http://127.0.0.1:9000/";
//通用方法
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}

//通用方法
export const POSTMY = (url, params) => {
  return axios.post(`${apiUrl}${url}`, params).then(res => res.data)
}

export const DELETE_POST_MY = (url, params) => {
  return axios.post(`${apiUrl}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {params: params}).then(res => res.data)
};

export const GETMY= (url, params) => {
  return axios.get(`${apiUrl}${url}`,{params: params}).then(res => res.data)
};

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const PUTMY = (url, params) => {
  return axios.post(`${apiUrl}${url}`,params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {params: params}).then(res => res.data)
}

export const DELETEMY = (url, params) => {
  return axios.delete(`${apiUrl}${url}`,{params:params}).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}
