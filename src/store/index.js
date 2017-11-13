import Vue from 'vue'
// import modules1 from './modules/modules1'
// import modules2 from './modules/modules2'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {},
  // modules: {
  //   modules1,
  //   modules2
  // },
  mutations: {
    add (state, data) {
      console.log(state, data)
    },
    plus (state, data) {
      console.log('触发plus', 123, state, data)
    }
  },
  actions: {
    add (context, data) {
      context.commit('add', data)
    },
    plus (context, data) {
      context.commit('plus', data)
    }
  }
})
export default store
