import api from "../../api/tickets.cateogry";

const state = {
  category: [],
  totals: 0,
}

const getters = {
  category: state => JSON.parse(JSON.stringify(state.category)),
  totals: state => state.totals,
  isLoading: state => state.isLoading,
}

const actions = {
  async getDataCategory({ commit }, req) {
    commit("setLoading", true);
    commit("getDataCategory", await api.getDataCategory(req));
    commit("setLoading", false);
  },
  async removeCategory({ commit }, req) {
    commit("removeCategory", await api.removeCategory(req))
  },
  async createCategory({ commit }, req) {
    commit("createCategory", await api.createCategory(req))
  },
  async updateCategory({ commit }, req) {
    commit("updateCategory", await api.updateCategory(req));
  },
}

const mutations = {
  getDataCategory(state, response) {
    state.category = response.results;
    state.totals = response.count;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  removeCategory(state, response) {
    state.category = state.category.filter(x => x.id !== response)
  },
  createCategory(state, response) {
    state.category = [...state.category, response]
  },
  updateCategory(state, response) {
    state.category = state.category.map(x => {
      if (x.id === response.id) {
        return { ...x, ...response }
      }
      return x;
    })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
