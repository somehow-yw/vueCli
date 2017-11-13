import * as types from '../mutation-types'
const initialState = {
  count: 1,
  begin: 1
}
const mutations = {
  [types.MODULES1_ASSIGN] (state, data) {
    console.log(123)
    return state.count ++
  },
  [types.MODULES1_ASSIGN] (state, data) {
    console.log(state.begin ++)
  }
}

const actions = {
  add (context, data) {
    context.commit(types.MODULES1_ASSIGN, data)
  },
  plus (context, data) {
    context.commit(types.MODULES1_ASSIGN, data)
  }
}

const getters = {
}

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: Object.assign({}, initialState)
}
