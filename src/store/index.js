import Vue from 'vue'
import Vuex from 'vuex'
import setting from './setting'
import detail from './detail'

Vue.use(Vuex)

import home from './home'

const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    setting,
    detail,
  },
})
