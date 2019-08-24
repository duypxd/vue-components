<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="260"
  >
    <v-toolbar color="primary darken-1" dark>
      <img src="../../assets/logo.png" alt="vue-components" height="36" />
      <v-toolbar-title class="ml-0 pl-3">Vue-Components</v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <MenuRouter />
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import MenuRouter from "./MenuRouter";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar,
    MenuRouter
  },
  data() {
    return {
      mini: false,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    };
  },
  created() {
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
  }
};
</script>

<style lang="stylus">
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';
#appDrawer {
  overflow: hidden;

  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}
</style>
