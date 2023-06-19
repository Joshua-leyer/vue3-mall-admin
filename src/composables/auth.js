import { useCookies } from '@vueuse/integrations/useCookies'


const TokenKey = "token-admin"

const cookies = useCookies()


// 设置 token 
export function setToken(token) {
    return cookies.set(TokenKey, token)
}


// 获取 token 
export function getToken() {
    return cookies.get(TokenKey)
}


// 删除 token
export function removeToken() {
    return cookies.remove(TokenKey)
}