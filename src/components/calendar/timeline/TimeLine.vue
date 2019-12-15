<template>
  <div>
    <div>
      <TimeLinePreview
        :preview-data="timeline"
        @activePreviewDay="changeActiveDay"
      />
    </div>
    <div>
      <TimeLineHeader class="timeline-preview-header" />
    </div>
    <div>
      <TimeLineBody :list="timeline[selectedDay]" />
    </div>
  </div>
</template>

<script>
import TimeLineHeader from "../resource-viewer/DailyTimerHeader";
import TimeLinePreview from "../timeline-preview/TimeLinesPreview";
import TimeLineBody from "./TimeLineBody";
export default {
  components: {
    TimeLineHeader,
    TimeLineBody,
    TimeLinePreview
  },
  props: {
    timeline: Object
  },
  data() {
    return { selectedDay: "" };
  },
  methods: {
    changeActiveDay(day) {
      this.selectedDay = day;
    }
  }
};
</script>
<style scoped>
.timeline-preview-header /deep/ .v-calendar-daily__head {
  margin-right: 0px !important;
}
</style>
