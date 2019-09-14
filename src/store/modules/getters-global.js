import getDataGettersGlobal from "../../api/getters-global";

const state = {
  ticketsConfig: []
}

const getters = {
  ticketsConfig: state => state.ticketsConfig,
}

const actions = {
  async getDataGettersGlobal({ commit }) {
    commit("getDataGettersGlobal", await getDataGettersGlobal());
  }
}

const mutations = {
  getDataGettersGlobal(state, response) {
    state.ticketsConfig = response.ticketConfig;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}