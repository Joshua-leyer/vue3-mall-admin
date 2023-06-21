import { useRouter, createRouter, createWebHashHistory } from 'vue-router'

import { getToken } from '@/composables/auth.js'
import { toast } from '../composables/util'

import Index from '@/pages/index.vue'
import About from '@/pages/about.vue'
import NotFoundPage from '@/pages/404.vue'
import Login from '@/pages/login.vue'


const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/:pathMath(.*)",
        name: "NotFoundPage",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


import router from '@/router/index.js'

// 判断是否登录的功能
router.beforeRouter((to, from, next) => {
    const token = getToken()
    if (!token && to.path !== "/login") {
        toast("请先登录", "error")
        return next({path: "/login"})
    }
    // 避免重复进入 登录页面
    if (token && to.path == 'login') {
        return next({path:from.path ? from.path: "/"})
    }
    next()    
})







export default router
