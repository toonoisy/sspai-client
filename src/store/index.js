import Vue from 'vue'
import Vuex from 'vuex'
import topics from './topics'
import setting from './setting'
import detail from './detail'

Vue.use(Vuex)
import matrix from './matrix'

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
  },
})
