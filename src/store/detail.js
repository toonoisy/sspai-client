import { reqDetailInfo } from '../api'
const state = {
  detailInfo: {},
}
const mutations = {
  REVEICEDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo
  },
}
const actions = {
  async getDetailInfo({ commit }, id) {
    const result = await reqDetailInfo(id)
    commit('REVEICEDETAILINFO', result.data)
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
