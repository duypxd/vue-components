import getDataGettersGlobal from "../../api/getters-global";

const state = {
  statusTickets: []
}

const getters = {
  statusTickets: state => state.statusTickets,
}

const actions = {
  async getDataGettersGlobal({ commit }) {
    commit("getDataGettersGlobal", await getDataGettersGlobal());
  }
}

const mutations = {
  getDataGettersGlobal(state, response) {
    state.statusTickets = response.ticketConfig;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}