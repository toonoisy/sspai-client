import {
  reqSeetingInfo,
  reqSwitchInfo,
  reqContentInfo,
  reqSelectedInfo,
} from '@/api'
const state = {
  settingInfo: {},
  switchInfo: {},

  contentInfo: [],

  selectedInfo: {},
}
const mutations = {
  //商城首页数据
  RECEIVEREQSETTINGINFO(state, settingInfo) {
    state.settingInfo = settingInfo
  },
  //分类列表数据
  RECEIVESWITCHINFO(state, switchInfo) {
    state.switchInfo = switchInfo
  },
  //内容区分类数据
  RECEIVECONTENTINFO(state, contentInfo) {
    state.contentInfo = [...state.contentInfo, ...contentInfo]
  },
  //覆盖数据
  RECEIVECONTENTINFN(state, contentInfo) {
    state.contentInfo = contentInfo
  },
  RECEIVESELECTINFO(state, selectedInfo) {
    state.selectedInfo = selectedInfo
  },
}
const actions = {
  //商城首页数据
  async getSeetingInfo({ commit }, id) {
    const result = await reqSeetingInfo(id)
    commit('RECEIVEREQSETTINGINFO', result.data)
  },
  //分类列表数据
  async getswitchInfo({ commit }) {
    const result = await reqSwitchInfo()
    commit('RECEIVESWITCHINFO', result.data)
  },
  //内容区分类数据

  async getContentInfo({ commit }, { offset, class_id }) {
    const result = await reqContentInfo(offset, class_id)
    if (result.data.length === 12) {
      commit('RECEIVECONTENTINFO', result.data)
    } else {
      commit('RECEIVECONTENTINFN', result.data)
    }
  },
  //更多内容数据
  async getSelectedInfo({ commit }) {
    const result = await reqSelectedInfo()
    commit('RECEIVESELECTINFO', result.data)
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
