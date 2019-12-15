<template>
  <v-app-bar color="primary" fixed dark app>
    <v-toolbar-title class="ml-0 pl-0"></v-toolbar-title>
    <v-app-bar-nav-icon @click.stop="handleDrawerToggle" />
    <v-spacer></v-spacer>
    <v-btn icon @click="$emit('openThemeSettings')">
      <v-icon>settings</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    }
  }
};
</script>