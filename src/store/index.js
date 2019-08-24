import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import theme from "./modules/theme";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  mutations: {
    cleanUpPageData() {
      for (var key in this._mutations) {
        if (key.endsWith("/cleanUpPageData")) {
          this.commit(key);
        }
      }
    }
  },
  modules: {
    theme
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
