<template>
    <div>
        <el-row class="login-container ">
            <el-col :lg="15" :md="12" :sm="10" class="left ">
                <div class="mx-8">
                    <div>Joshua's Admin</div>
                    <div>此站点基于 vue3 + vite 实现的，欢迎您，可以给个 star 吗？</div>
                </div>
            </el-col>
            
            <el-col :lg="9" :md="12" :sm="14" class="right ">
                <h2 class="welcome-title  ">欢迎回来</h2>
                <div class="">
                    <span class="line "></span>
                    <span>账号密码</span>
                    <span class="line "></span>
                </div>

                <el-form :model="form" :rules="rules" ref="formRef" class="w-[250px]">
                    <el-form-item  prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名">
                          <template #prefix>
                                <el-icon><User /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
 
                    <el-form-item prop="password">
                        <el-input v-model="form.password" type="password" @keydown.enter.native="onSubmit" placeholder="请输入密码" show-password> 
                            <template #prefix>
                                <el-icon><Lock /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="login-button" @click="onSubmit" :loading="Loginloading">登 录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template> 

  

<script setup>
import { reactive, ref } from 'vue'
// import { Calendar, Search, User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { loginPost, getInfo } from '@/api/manage.js'
import { setToken } from '@/composables/auth.js'
import { toast } from '@/composables/util.js'
import { useStore }  from 'vuex'

const router = useRouter()   // vue-router 官网有讲 和 vue2.x方式不同  ！！！我人都傻 了，我这里引入错误导致 router.push出错然后 暴露出了错误。
const store = useStore()
// do not use same name with ref
const form = reactive({
    username: "",
    password: ""
})

const rules = {
    username: [
        { required: true, message: 'Please input  username', trigger: 'blur' },
        { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input  username', trigger: 'blur' }
    ]
}

const formRef = ref(null) // null 是单值 所以用 ref
const Loginloading = ref(false)   // 默认 false , 按钮为不是加载状态


const onSubmit = () => {
    console.log(`点击`)
    // validate 是拿到验证表单的验证结果 true / false 。根据上面写的验证来得到不同的结果的
    formRef.value.validate( (valid)=> {
        // console.log(valid)  //true / false
        if (!valid) {
            return false
        }
        Loginloading.value = true
        loginPost(form.username, form.password)
            .then(res => {
                // 1. 提示成功  
                toast("登录成功", 'success')
                // 2. 存储 token
                setToken(res.token) 

                /** 携带token 获取用户信息 */
                getInfo().then(res2_userdata => {
                    store.commit("SET_USERINFO", res2_userdata)

                })

                // 3. 跳转页面   注意这里的坑，promise 中如果在 then中返回一个错误，那么会被捕获到自动执行下面的 catch
                  //  有趣的是 router.push 也是一个promise对象，所以，如果push出了错误，可能也会执行 下面的登录逻辑中的catch这很不好
                router.push({   
                    name: 'Index',
                    path: '/'
                })
            })
            .catch(err => {
                console.log(err.response)
            })
            .finally(() => {
                Loginloading.value = false
            })
        // const res = await loginReq(form.username, form.password);
        // console.log(res)
    })
    // console.log(`我在上面的验证之前输出，`)
    // 说明  那个验证函数是异步的，具体element在验证 表单的地方提到
}

</script>

<style scoped>
.login-container {
    @apply min-h-screen bg-purple-500;
}
.login-container .left {
    @apply flex items-center justify-center;
}
.login-container .right {
    @apply bg-light-300 flex items-center justify-center flex-col space-x-4;
}
.login-container>div>div:first-child{
    @apply font-bold text-4xl text-light-50 mb-4;
}
.login-container>div>div:last-child{
    @apply  text-light-300 text-2xl;
}
.right .welcome-title {
    @apply text-purple-500 text-5xl;
}
.right>div {
    @apply flex items-center justify-center my-5 text-purple-500 space-x-2;
}
.right .line {
    @apply h-[1px] w-16 bg-gray-300;
}
.login-button {
    @apply w-[250px] h-10 text-lg rounded-3xl;
}
</style>