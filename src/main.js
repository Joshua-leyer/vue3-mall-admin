import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
// 注意 import 的代码位置
import 'virtual:windi.css'

app.mount('#app')

/**
 * or
 * createApp(App).use(ElementPlus).mount('#app)
 */
