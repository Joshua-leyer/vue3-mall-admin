import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        user: {}
      }
    },
    mutations: {
        SET_USERINFO(state, user) {
            state.user = user
        }
    },
    actions: {
      getinfo({ commit }) {

      }
    }
  })

export default store

