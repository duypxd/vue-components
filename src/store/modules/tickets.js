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
  },
  async createNewTickets({ commit }, req) {
    commit("createNewTickets", await api.createNewTickets(req));
  }
};

const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  getDataTickets(state, response) {
    state.dataTickets = response;
  },
  createNewTickets(state, resp) {
    state.dataTickets[resp.keyId].results.push(resp);
    state.dataTickets[resp.keyId].totals++;
  },
  updateTickets(state, resp) {
    if (resp.drag) {
      const result = { ...resp.body, id: resp.params.rowId };
      const fromStage = state.dataTickets[resp.drag.fromGroupId].results;
      if (resp.drag.toGroupId) {
        const toStage = state.dataTickets[resp.drag.toGroupId].results;
        toStage.splice(resp.drag.newIndex, 0, fromStage.splice(resp.drag.oldIndex, 1)[0]);
        toStage[resp.drag.newIndex] = { ...toStage[resp.drag.newIndex], ...result };
        state.dataTickets[resp.drag.fromGroupId].totals--;
        state.dataTickets[resp.drag.toGroupId].totals++;
      } else {
        array_move(fromStage, resp.drag.oldIndex, resp.drag.newIndex);
        fromStage[resp.drag.newIndex] = { ...fromStage[resp.drag.newIndex], ...result };
      }
    } else {
      state.dataTickets[resp.key].results = state.dataTickets[resp.key].results.map(x => {
        if (x.id === resp.rowId) {
          const res = {
            [resp.columnName]: resp.bodyRequest[resp.columnName]
          }
          return { ...x, ...res }
        }
        return x;
      })
    }
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

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}