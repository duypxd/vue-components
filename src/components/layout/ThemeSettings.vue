<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title>Theme Settings</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-subheader class="px-1 my-2">Color Option</v-subheader>
          <div class="color-option">
            <v-row wrap>
              <label
                v-for="(option, index) in themeColorOptions"
                :key="index"
                class="color-option--label flex xs6 pa-1"
              >
                <input
                  v-model="themeColorComputed"
                  type="radio"
                  name="color"
                  :value="option.key"
                />
                <span class="color-option--item bg">
                  <span class="overlay">
                    <span class="material-icons">check</span>
                  </span>
                  <span
                    class="color-option--item--header sideNav"
                    :class="option.value.sideNav"
                  ></span>
                  <span
                    class="color-option--item--header mainNav"
                    :class="option.value.mainNav"
                  ></span>
                  <span class="sideMenu" :class="option.value.sideManu"></span>
                </span>
              </label>
            </v-row>
          </div>
          <div class="theme-options">
            <v-subheader class="px-1 my-2">Sidebar Option</v-subheader>
            <v-divider></v-divider>
            <div class="my-3">
              <v-btn-toggle v-model="isDarkComputed">
                <v-btn value="dark">Dark</v-btn>
                <v-btn value="light">Light</v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import colors from "vuetify/lib/util/colors";
import { mapMutations, mapGetters } from "vuex";
import { themeColors } from "../../config";
export default {
  data() {
    return {
      colors,
      themeColors
    };
  },
  computed: {
    themeColorOptions() {
      return this.themeColors;
    },
    ...mapGetters("theme", ["themeColor", "isDark"]),
    themeColorComputed: {
      get() {
        return this.themeColor;
      },
      set(val) {
        this.setThemeColor(val);
        this.$vuetify.theme.themes.dark.primary = this.colors[val].base;
        this.$vuetify.theme.themes.light.primary = this.colors[val].base;
      }
    },
    isDarkComputed: {
      get() {
        return this.isDark;
      },
      set(val) {
        this.setDarkLight(val);
        this.$vuetify.theme.dark = val === "dark";
      }
    }
  },
  methods: {
    ...mapMutations("theme", ["setThemeColor", "setDarkLight"])
  }
};
</script>
<style lang="stylus" scoped>
.color-option {
  &--label {
    position: relative;
    display: block;
    cursor: pointer;

    & input[type='radio'] {
      display: none;

      &+span {
        position: relative;

        &>.overlay {
          display: none;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          text-align: center;
          line-height: 30px;
          color: #fff;
        }
      }

      &:checked+span>.overlay {
        display: block;
      }
    }

    & .bg {
      background-color: #f1f1f1;
    }
  }

  &--item {
    overflow: hidden;
    display: block;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;

    &--header {
      height: 10px;
    }

    &>span {
      display: block;
      float: left;
      width: 50%;
      height: 20px;
    }
  }
}
</style>
