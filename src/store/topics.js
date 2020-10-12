import {reqTopicsList} from '@/api'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    topicsList: [],
}
const mutations = {
    RECIVETOPICSLIST(state,topicsList){
        state.topicsList = topicsList
    }
}
const actions = {
    async getTopicsList({commit}){
        const result = await reqTopicsList()
        commit('RECIVETOPICSLIST',result)
        localStorage.setItem('USERINFO_KEY',JSON.stringify(result))
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
  }