import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)


app.use(store)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 注意 import 的代码位置
import 'virtual:windi.css'




app.mount('#app')

/**
 * or
 * createApp(App).use(ElementPlus).mount('#app)
 */
