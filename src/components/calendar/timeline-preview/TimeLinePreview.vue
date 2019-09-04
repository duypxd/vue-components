<template>
  <v-card
    class="preview-container"
    :dark="!!isActive"
    :class="{'active':!!isActive, 'weekend': isWeekend}"
    :color="isActive ? 'primary':`transparent`"
    @click="$emit('activeCard')"
  >
    <v-card-text class="preview-inner px-0 pt-2 pb-3">
      <div class="card-container">
        <v-row no-gutters class="title-place px-2 py-2 ma-1" justify="space-between">
          <span class="headline">{{days}}</span>
          <span class="caption">{{day}}</span>
        </v-row>
        <TimeLineBody :list="timeLine" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
import TimeLineBody from "./TimeLinePreviewBody";
export default {
  components: {
    TimeLineBody
  },
  props: {
    timeLine: Array,
    isActive: Boolean,
    date: String
  },
  computed: {
    day() {
      return moment(this.date).format("ddd");
    },
    days() {
      return moment(this.date).format("DD");
    },
    isWeekend() {
      const days = moment(this.date).days();
      return days === 0 || days === 6; // saturday is 6 & sunday is 0
    }
  }
};
</script>
<style scoped>
.preview-container.active {
  z-index: 1;
  border-radius: 6px;
}
.preview-container {
  min-height: 120px;
}
.preview-container,
.preview-container .preview-inner,
.preview-container .preview-inner .card-container {
  height: 100%;
}
.weekend .title-place {
  opacity: 0.3;
}
.preview-container .card-container {
  border-right: 1px dotted silver;
}
.preview-container.active .card-container {
  border-right: none;
}
</style>
