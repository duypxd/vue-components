import api from "../../api/tickets";

const state = {
  dataTickets: {},
  isLoading: false
};

const getters = {
  dataTickets: (state, _, __, rootGetters) => {
    if (state.dataTickets.id === 9999) {
      return state.dataTickets;
    } else {
      var nameGetters = rootGetters["gettersGlobal/ticketsConfig"];
      var group = {};
      Object.keys(state.dataTickets).reduce((_, key) => {
        const item = nameGetters.find(f => f.id == key);
        const objectKeys = state.dataTickets[key];
        group[item.name] = {
          id: key,
          results: objectKeys.results,
          totals: objectKeys.results.length
        }
      }, {});
      return group;
    }
  },
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
    state.dataTickets = response;
  },
  updateTickets(state, response) {
    state.dataTickets.results = state.dataTickets.results.map(x => {
      if (x.id === response.rowId) {
        const res = {
          [response.columnName]: response.bodyRequest[response.columnName]
        }
        return { ...x, ...res }
      }
      return x;
    })
  },
  removeTickets(state, response) {
    state.dataTickets.results = state.dataTickets.results.filter(x => x.id !== response)
  },
  dragAndDropRows(state, response) {
    state.dataTickets.results = response;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
