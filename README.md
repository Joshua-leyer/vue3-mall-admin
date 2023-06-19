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

- setup
   SFC 单文件组件，组合式API编写方式，需要的语法糖
   [官方链接](https://cn.vuejs.org/api/composition-api-setup.html#basic-usage)
  - 简单复习 ref ， reactive

- element-plust form表单验证
  :imp:正常的思维逻辑，一定会想这个规则有哪些可以写，怎么写? 蛋疼的是官网并没有明确的提示有哪些字段可以写。教程也不说，烦死。
  :grinning: 最终我在一个人的博客上看到相关文章：[CSDN-element-plus表单验证使用 个人总结](https://blog.csdn.net/ymzhaobth/article/details/120820053)
  :imp:看这个文章，最起码我知道 rules 中有哪些字段可以填写 ， trigger 字段是 element-plus 提供的，有 blur / change 两个可选值。 这些教程不说，学习的人怎么会知道呢？
  步骤 >
  1. 表单要添加 :rules="rules" 属性
  2. 在 item 标签中添加属性 prop="" 指定需要验证的键值，具体看代码
  3. 以上步骤只是表单内部输入的时候验证，并没有在提交前验证
  4. 需要 获取 form 表单 DOM ，拿到其中的 validate 值判断验证结果 根据这个结果做出处理
- axois 请求 完善登录功能
  - API接口 : [dishaxy.dishait.cn/shopadminapi](http://dishaxy.dishait.cn/shopadminapi#8dcb983b-d4e3-4888-8c11-910af2aa661d)
  - 复习 前端使用代理服务器方式 ，解决跨域问题. 每个框架配置方式不一样， vite 里面看配置页面的 proxy
  - 学习 vite 配置 代理服务器
  - element message 消息弹窗组件的使用
  - element input 组件 绑定 键盘回车 实现按钮登录功能
      :basketball: vue.js 绑定的@keydown 触发有个 __前提__ 就是 该元素要 __获得焦点__ 。所以如果单纯的用这个vue.js原生方式绑定到 button 上并不可行
      但是可以绑定到最后一个 input 元素上，注意 ! 有时候不生效的情况，使用修饰符，
      ```js
      @keydown.enter.native="onSubmit"
      ```
      还有一种写法就是页面监听键盘 enter 按键，不过这种写法感觉会降低页面效率不好：贴个链接吧，[留作记录](https://blog.csdn.net/qq_37588752/article/details/80005160)
- 存储 token 
    前端存储 token 的。 我们还可以在写后端的时候，这些东西由后端来写。
  - 使用 vueuse.org 提供的方法在 vue.js中 来操作 cookie 
    :bomb: 什么时候自己封装一个 
    :dizzy_face: 这用方法有点繁琐，居然还需要一个依赖。

- asios 请求拦截器的使用
  src/axios.js
  - 学习这里的请求前是否携带 token 的处理
  
- 防止 登录按钮 多次点击的问题
  使用 vue.js 提供的 :loading 属性，为标签修改为加载状态
  ```html
  <el-button  :loading="Loginloading">登 录</el-button>
  ```
- 封装抽离 token & message
  
  - 封装抽离 token /composables/auth.js 
  - 抽离 message 消息提示 /composables/util.js
    :grey_exclamation:所有的错误提示都在 axios.js 中拦截了
