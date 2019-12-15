import Cookies from "js-cookie";

const state = {
  themeColor: Cookies.getJSON("themeColor") || "indigo",
  isDark: Cookies.getJSON("isDark") || "light"
};

const getters = {
  themeColor: state => state.themeColor,
  isDark: state => state.isDark
};

const actions = {};

const mutations = {
  setThemeColor(state, color) {
    state.themeColor = color;
    Cookies.set("themeColor", color);
  },
  setDarkLight(state, option) {
    state.isDark = option;
    Cookies.set("isDark", option);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
