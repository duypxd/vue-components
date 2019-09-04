import api from "../../api/tickets";

const state = {
  dataTickets: [],
  totals: 0,
  isLoading: false
};

const getters = {
  dataTickets: state => {
    const resp = JSON.parse(JSON.stringify(state.dataTickets));
    return resp;
  },
  totals: state => state.totals,
  isLoading: state => state.isLoading
};

const actions = {
  async getDataTickets({ commit }, req) {
    commit("setLoading", true);
    commit("getDataTickets", await api.getDataTickets(req));
    commit("setLoading", false);
  },
  async updateTickets({ commit }, req) {
    commit("updateTickets", await api.updateTickets(req));
  },
  async removeTickets({ commit }, req) {
    commit("removeTickets", await api.removeTickets(req))
  },
  async dragAndDropRows({ commit }, req) {
    commit("dragAndDropRows", await api.dragAndDropRows(req));
  }
};

const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  getDataTickets(state, response) {
    state.dataTickets = response.results;
    state.totals = response.count;
  },
  updateTickets(state, response) {
    state.dataTickets = state.dataTickets.map(x => {
      if (x.id === response.id) {
        return { ...x, ...response }
      }
      return x;
    })
  },
  removeTickets(state, response) {
    state.dataTickets = state.dataTickets.filter(x => x.id !== response)
  },
  dragAndDropRows(state, response) {
    state.dataTickets = response;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
