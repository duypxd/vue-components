<template>
  <div>
    <div>
      <TimeLinePreview :previewData="timeline" @activePreviewDay="changeActiveDay"/>
    </div>
    <div>
      <TimeLineHeader class="timeline-preview-header"/>
    </div>
    <div>
      <TimeLineBody :list="timeline[selectedDay]"/>
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
  data() {
    return { selectedDay: "" };
  },
  props: {
    timeline: Object
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
