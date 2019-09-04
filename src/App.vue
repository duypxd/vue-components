<template>
  <v-app id="inspire" dark>
    <v-container fluid px-5>
      <AppDrawer class="app--drawer" />
      <AppToolbar @openThemeSettings="openThemeSettings" />
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
    </v-container>
  </v-app>
</template>
<script>
import AppDrawer from "./components/layout/AppDrawer";
import AppToolbar from "./components/layout/AppToolbar";
import ThemeSettings from "./components/layout/ThemeSettings";
import colors from "vuetify/lib/util/colors";

import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AppDrawer,
    AppToolbar,
    ThemeSettings
  },
  data() {
    return {
      expanded: true,
      rightDrawer: false,
      colors
    };
  },
  computed: {
    ...mapGetters("theme", ["themeColor", "isDark"])
  },
  methods: {
    ...mapActions("members", ["getDataMembersGlobal"]),
    openThemeSettings() {
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
    }
  },
  created() {
    window.getApp = this;
    this.$vuetify.theme.themes.dark.primary = this.colors[this.themeColor].base;
    this.$vuetify.theme.themes.light.primary = this.colors[
      this.themeColor
    ].base;
    this.$vuetify.theme.dark = this.isDark === "dark";
  },
  mounted() {
    this.getDataMembersGlobal();
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
