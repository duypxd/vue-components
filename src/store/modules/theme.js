import Cookies from "js-cookie";

const state = {
  themeColor: Cookies.getJSON("themeColor") || "indigo",
  sideBarOption: Cookies.getJSON("sideBarOption") || "light",
};

const getters = {
  themeColor: state => state.themeColor,
  sideBarOption: state => state.sideBarOptions
};

const actions = {};

const mutations = {
  setThemeColor(state, color) {
    state.themeColor = color;
    Cookies.set("themeColor", color);
  },
  setSideBarOption(state, option) {
    state.sideBarOption = option;
    Cookies.set("sideBarOption", option);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
