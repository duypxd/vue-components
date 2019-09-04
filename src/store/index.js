import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

//Global
import theme from "./modules/theme";
import members from "./modules/member-global";

//import modules
import employees from "./modules/employees";
import timeline from "./modules/timeline";

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
    // Global
    theme,
    members,
    // Component
    employees,
    timeline
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
