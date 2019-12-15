import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

const colorGlobal = {
  primary: "#1976D2",
  secondary: "#424242",
  accent: "#82B1FF",
  error: "#FF5252",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FB8C00"
};

export default new Vuetify({
  icons: {
    iconfont: "md" // "mdi" || "mdiSvg" || "md" || "fa" || "fa4"
  },
  theme: {
    themes: {
      light: colorGlobal,
      dark: colorGlobal
    }
  },
  customProperties: true
});
