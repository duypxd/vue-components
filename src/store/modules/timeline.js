import api from "../../api/timeline";

const state = {
  dataTimeLine: []
};

const getters = {
  dataTimeLine: state => state.dataTimeLine
};

const actions = {
  async getDataTimeLine({ commit }) {
    commit("getDataTimeLine", await api.getDataTimeLineFromApi());
  }
};

const mutations = {
  getDataTimeLine(state, response) {
    state.dataTimeLine = response;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
