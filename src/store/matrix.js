import {
  reqMatricList,
  reqMatricYipai,
  reqMatricCommend,
  reqMatricSpecial,
} from "@/api";

const state = {
  matricList:[],
  matricYipai:[],
  matricCommend:[],
  matricSpecial:[],
};

const mutations = {
  //直接修改数据  （不允许出现if  for  异步操作）
  RECEIVEMATRICLIST(state,matricList){
    state.matricList = matricList
  },
  RECEIVEMATRICYIPAI(state,matricYipai){
    state.matricYipai = matricYipai
  },
  RECEIVEMATRICCOMMEND(state,matricCommend){
    state.matricCommend = matricCommend
  },
  RECEIVEMATRICSPECIAL(state,matricSpecial){
    state.matricSpecial = matricSpecial
  },
};

const actions = {
  //异步请求获取数据  允许if  for  异步操作
  async getMatricList({commit}) {
    const result = await reqMatricList();
    if (result.code === 200) {
      commit('RECEIVEMATRICLIST', result.data)
    }
  },

  async getMatricYipai({commit}) {
    const result = await reqMatricYipai();
    if (result.code === 200) {
      commit('RECEIVEMATRICYIPAI', result.data)
    }
  },

  async getMatricCommend({commit}) {
    const result = await reqMatricCommend();
    if (result.code === 200) {
      commit('RECEIVEMATRICCOMMEND', result.data)
    }
  },

  async getMatricSpecial({commit}) {
    const result = await reqMatricSpecial();
    if (result.code === 200) {
      commit('RECEIVEMATRICSPECIAL', result.data)
    }
  },

};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}




