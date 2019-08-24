<template>
  <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app id="inspire" class="app">
        <AppDrawer class="app--drawer" />
        <AppToolbar @openThemeSettings="openThemeSettings" class="app--toolbar" />
        <v-content>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
        </v-content>
        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
        >
          <ThemeSettings />
        </v-navigation-drawer>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view :key="$route.fullpath"></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>
<script>
import AppDrawer from "./components/layout/AppDrawer";
import AppToolbar from "./components/layout/AppToolbar";
import ThemeSettings from "./components/layout/ThemeSettings";
import colors from "vuetify/es5/util/colors";

import { mapGetters } from "vuex";
export default {
  components: {
    AppDrawer,
    AppToolbar,
    ThemeSettings
  },
  data() {
    return {
      expanded: true,
      rightDrawer: false
    };
  },

  created() {
    window.getApp = this;
    this.$vuetify.theme.primary = colors[this.themeColor].base;
    this.$vuetify.dark = this.sideBarOption === "dark";
  },
  methods: {
    openThemeSettings() {
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
    }
  },
  computed: {
    ...mapGetters("theme", ["themeColor", "sideBarOption"])
  }
};
</script>

<style lang="stylus" scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}
</style>
