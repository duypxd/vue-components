import api from "../../api/member-global";

const state = {
  members_global: []
}

const getters = {
  members_global: state => state.members_global,
}

const actions = {
  async getDataMembersGlobal({ commit }) {
    commit("getDataMembersGlobal", await api.getDataMembersGlobal());
  }
}

const mutations = {
  getDataMembersGlobal(state, response) {
    state.members_global = response;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
