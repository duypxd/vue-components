<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title class="ml-0 pl-0"></v-toolbar-title>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-spacer></v-spacer>

    <v-menu offset-y :nudge-bottom="10" transition="scale-transition">
      <v-btn flat slot="activator" icon>
        <v-icon>person</v-icon>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile @click="$emit('openThemeSettings')">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Theme</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
      </v-list>
    </v-menu>
  </v-toolbar>
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
