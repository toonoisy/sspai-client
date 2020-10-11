import {
  reqSeriesBannerList,
  reqSeriesRecommendList,
  reqSeriesLatestList,
  reqSeriesTrialList,
  reqSeriesCategoriesList,
} from "@/api";

const state = {
  bannerList: [],
  recommendList: [],
  latestList: [],
  trialList: [],
  categoriesList: [],
};
const mutations = {
  SETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  SETRECOMMENDLIST(state, recommendList) {
    state.recommendList = recommendList;
  },
  SETLATESTLIST(state, latestList) {
    state.latestList = latestList;
  },
  SETTRIALLIST(state, trialList) {
    state.trialList = trialList;
  },
  SETCATEGORIESLIST(state, categoriesList) {
    state.categoriesList = categoriesList;
  },
};
const actions = {
  async getBannerList({ commit }) {
    const res = await reqSeriesBannerList();
    if (res.error === 0) {
      commit("SETBANNERLIST", res.data);
    }
  },
  async getRecommendList({ commit }) {
    const res = await reqSeriesRecommendList();
    if (res.error === 0) {
      commit("SETRECOMMENDLIST", res.data);
    }
  },
  async getLatestList({ commit }) {
    const res = await reqSeriesLatestList();
    if (res.error === 0) {
      commit("SETLATESTLIST", res.data);
    }
  },
  async getTrialList({ commit }) {
    const res = await reqSeriesTrialList();
    if (res.error === 0) {
      commit("SETTRIALLIST", res.data);
    }
  },
  async getCategoriesList({ commit }) {
    const res = await reqSeriesCategoriesList();
    if (res.error === 0) {
      commit("SETCATEGORIESLIST", res.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
