import Vue from 'vue'
import Vuex from 'vuex'
import topics from './topics'
import setting from './setting'
import detail from './detail'
import series from './series'
import matrix from './matrix'
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
    topics,
    home,
    setting,
    detail,
    matrix,
    series,
  },
})
