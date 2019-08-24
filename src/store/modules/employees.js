import api from "../../api/employees";

const state = {
  dataEmployees: []
}

const getters = {
  dataEmployees: state => state.dataEmployees
}

const actions = {
  async getDataEmployees({ commit }) {
    commit("getDataEmployees", await api.getDataEmployeesFromApi());
  }
}

const mutations = {
  getDataEmployees(state, response) {
    state.dataEmployees = response;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
