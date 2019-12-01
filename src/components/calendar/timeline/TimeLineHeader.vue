<template>
  <div
    :class="
      `v-calendar resource-viewer v-calendar-daily theme--${isDark} month-view`
    "
  >
    <div
      class="v-calendar-daily__head"
      :style="{ marginRight: scrollPush + 'px' }"
    >
      <div
        v-for="h in hours"
        :key="h"
        class="v-calendar-daily_head-day text-xs-center"
      >
        <div class="v-calendar-daily_head-weekday">{{ (h % 12) + 1 }}</div>
        <div class="v-calendar-daily_head-day-label">
          {{ h >= 11 ? "PM" : "AM" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      hours: [],
      scrollPush: 0
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
    for (let i = 0; i < 24; i++) {
      this.hours.push(i);
    }
  },
  computed: {
    ...mapGetters("theme", ["isDark"])
  },
  methods: {
    onResize() {
      this.scrollPush = this.getScrollPush();
    },
    getScrollPush() {
      var area = document.getElementsByClassName(
        "v-calendar-daily__scroll-area"
      );
      var pane = document.getElementsByClassName("v-calendar-daily__pane");
      return area && pane ? area[0].offsetWidth - pane[0].offsetWidth : 0;
    }
  }
};
</script>

<style scoped>
.resource-viewer {
  border-top: 1px solid silver;
}
.v-calendar-daily_head-day-label {
  font-size: 16px !important;
}
</style>
