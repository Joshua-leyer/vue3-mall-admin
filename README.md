# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).




## Learn Log



#### 1章节
    见 vite 官网
    $ npm create vite@latest my-vue-app -- --template vue

#### 2章节 创建项目 & 引入 element-plus & Windi CSS

- vite创建项目 & element-plus 的引用 & Windi CSS
    - elment-plus 提供 html组件用
    - [Windi CSS](https://cn.windicss.org/guide/) 主要负责 CSS 样式修改用的一个 样式组件 
- vue-router 引入
  其实整个 vue-router 的原理什么的背后设计的JS源码，和提供的接口才是应该学习的，否则，根本不知道怎么使用，配置到底什么意思。
  - 日后补充这里
  - 路由配置 & 404 页面配置
    path: "/:pathMath(.*)"  ， [404，见 vue-router 官网](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)

  - src 指定别名  vite官网 alias 关键字。

#### 3章 登录页面 & 功能实现

主要文件 ：src/pages/login.vue

- 使用 element 提供的响应式方法
  - 全局方式引入图标
      详细见官网 __有段代码__ 要放入 main.js中.
      :hankey: 在使用的时候不可以使用 元素属性的方式来添加图标，而是组件的方式 ， 而且多就是少，少就是多的思想，学会一种实现方式即可。推荐全局
      ```html
            <el-input  > 
              <template #prefix>
                  <el-icon><Lock /></el-icon>
              </template>
            </el-input>
      ```
  - 局部方式引入图标
    ```html
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
      import { Calendar, Search } from '@element-plus/icons-vue'
    ```
- 结合 weindi CSS 给的 @apply 抽离 html 中样式部分的代码，优化 html 代码可阅读性
 
  /src/pages/login.vue


