import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/index.vue'
import About from '@/pages/about.vue'
import NotFoundPage from '@/pages/404.vue'

const routes = [
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

export default router
