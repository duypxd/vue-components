import api from "../../api/employees";

const state = {
  dataEmployees: []
};

const getters = {
  dataEmployees: state => {
    const resp = JSON.parse(JSON.stringify(state.dataEmployees));
    return resp;
  }
};

const actions = {
  async getDataEmployees({ commit }) {
    commit("getDataEmployees", await api.getDataEmployeesFromApi());
  },
  async dragAndDropRows({ commit }, req) {
    commit("dragAndDropRows", await api.dragAndDropRows(req));
  }
};

const mutations = {
  getDataEmployees(state, response) {
    state.dataEmployees = response;
  },
  dragAndDropRows(state, response) {
    state.dataEmployees = response;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
