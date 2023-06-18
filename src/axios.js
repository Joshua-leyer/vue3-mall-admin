import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://ceshi13.dishait.cn"
    baseURL: "/api"
})

export default instance


