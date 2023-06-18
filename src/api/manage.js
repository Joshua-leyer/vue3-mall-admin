import axios from '@/axios.js'

export function loginPost(username, password) {
    // 返回一个 Promise 
    return axios.post("/admin/login",  {
        username,
        password
    })
}


