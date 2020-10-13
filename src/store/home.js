import {
  reqKeywordList,
  reqCardImgList,
  reqYipaiCardList,
  addArticalCardList,
} from '@/api'
const state = {
  keywordList: [],
  cardImgList: [],
  yipaiCardList: [],
  articalCardList: [],
}

const mutations = {
  // 1-修改 keywordList
  RECEIVE_KEYWORD_LIST(state, keywordList) {
    state.keywordList = keywordList
  },
  // 2-卡片图片列表
  RECEIVE_CARDIMG_LIST(state, cardImgList) {
    state.cardImgList = cardImgList
  },
  // 3-右侧一派卡片
  RECEIVE_YIPAI_CARD(state, yipaiCardList) {
    state.yipaiCardList = yipaiCardList
  },
  // 4-reqArticalCardList
  RECEIVE_ARTICLCARD_LIST(state, articalCardList) {
    state.articalCardList = articalCardList
  },
  // 5-添加数据
  ADD_ARTICALCARD_LIST(state, articalCardList) {
    state.articalCardList = [...state.articalCardList, ...articalCardList]
  },
  // 6-切换tab
  SWITCH_ARTICALCARD_LIST(state, articalCardList) {
    state.articalCardList = articalCardList
  },
}

const actions = {
  // 1-获取 keywordList
  async getKeywordList({ commit }) {
    const result = await reqKeywordList()
    let keywordList = result.data.hot_keywords
    keywordList = keywordList.split(',')
    commit('RECEIVE_KEYWORD_LIST', keywordList)
  },
  // 2-获取卡片图片列表
  async getCardImgList({ commit }) {
    const result = await reqCardImgList()
    commit('RECEIVE_CARDIMG_LIST', result.data)
  },
  // 3-右侧一派卡片
  async getYipaiCardList({ commit }) {
    const result = await reqYipaiCardList()
    commit('RECEIVE_YIPAI_CARD', result.data)
  },
  // 4-getArticalCardList
  async getArticalCardList({ commit }, { limit, offset, tag, time }) {
    const result = await addArticalCardList({ limit, offset, tag, time })
    let list = result.data
    list.length === 10
      ? commit('SWITCH_ARTICALCARD_LIST', list)
      : commit('ADD_ARTICALCARD_LIST', result.data)
  },
}

const getters = {
  morning_paper(state) {
    return (
      state.articalCardList.filter(
        (item) => item.morning_paper_title.length > 0
      )[0] || {}
    )
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
