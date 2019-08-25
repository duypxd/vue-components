import Cookies from "js-cookie";

const state = {
  themeColor: Cookies.getJSON("themeColor") || "indigo",
  sideBarOptionColor: Cookies.getJSON("sideBarOptionColor") || "light"
};

const getters = {
  themeColor: state => state.themeColor,
  sideBarOptionColor: state => state.sideBarOptionColor
};

const actions = {};

const mutations = {
  setThemeColor(state, color) {
    state.themeColor = color;
    Cookies.set("themeColor", color);
  },
  setSideBarOptionColor(state, option) {
    state.sideBarOptionColor = option;
    Cookies.set("sideBarOptionColor", option);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
