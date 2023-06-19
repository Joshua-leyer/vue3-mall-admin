import axios from 'axios';

import { toast } from '@/composables/util.js'
import { useCookies } from '@vueuse/integrations/useCookies'

import { getToken } from '@/composables/auth.js'

const instance = axios.create({
    // baseURL: "http://ceshi13.dishait.cn"
    baseURL: "/api"
})


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    const token = getToken()
    if (token) {
        config.headers["token"] = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data.data;   // + .data.data ，方便后续拿到数据
  }, function (error) {
    // 对响应错误做点什么
    toast(error.response.data.msg || '请求失败', 'error')
    return Promise.reject(error);
  });

export default instance


