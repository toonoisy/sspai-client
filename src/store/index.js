import Vue from 'vue'
import Vuex from 'vuex'
import topics from './topics'

Vue.use(Vuex)

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
  }
})