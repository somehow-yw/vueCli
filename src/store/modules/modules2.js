import * as types from '../mutation-types'
const initialState = {
  count2: 1,
  begin2: 1
}
const mutations = {
  [types.MODULES2_ASSIGN] (state, data) {
    console.log('data', data, 'state', state)
  }
}

const actions = {
  add2 (context, data) {
    context.commit(types.MODULES2_ASSIGN, data)
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
