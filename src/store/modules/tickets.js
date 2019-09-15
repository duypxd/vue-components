import api from "../../api/tickets";
import category from "./tickets.category";

const state = {
  dataTickets: {},
  isLoading: false
};

const getters = {
  dataTickets: (state, _, __, rootGetters) => {
    // if (state.dataTickets.id === 9999) {
    //   return state.dataTickets;
    // } else {
    //   var nameGetters = rootGetters["gettersGlobal/statusTickets"];
    //   var group = {};
    //   Object.keys(state.dataTickets).reduce((_, key) => {
    //     const item = nameGetters.find(f => f.id == key);
    //     const objectKeys = state.dataTickets[key];
    //     group[item.name] = {
    //       id: key,
    //       results: objectKeys.results,
    //       totals: objectKeys.results.length
    //     }
    //   }, {});
    //   return group;
    // }
    return state.dataTickets;
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
  updateTickets(state, resp) {
    state.dataTickets[resp.key].results = state.dataTickets[resp.key].results.map(x => {
      if (x.id === resp.rowId) {
        const res = {
          [resp.columnName]: resp.bodyRequest[resp.columnName]
        }
        return { ...x, ...res }
      }
      return x;
    })
  },
  removeTickets(state, resp) {
    state.dataTickets[resp.key].results = state.dataTickets[resp.key].results.filter(x => x.id !== resp.id)
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
  actions,
  modules: {
    category
  }
};
