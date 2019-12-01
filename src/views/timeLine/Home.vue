<template>
  <div>
    <div>
      <TimeLinePreview
        :preview-data="timeLineConvert"
        @activePreviewDay="changeActiveDay"
      />
    </div>
    <div>
      <TimeLineHeader class="timeline-preview-header" />
    </div>
    <div>
      <TimeLineBody :list="timeLineConvert[selectedDay]" />
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";

import TimeLineHeader from "../../components/calendar/timeline/TimeLineHeader";
import TimeLinePreview from "../../components/calendar/timeline-preview/TimeLinesPreview";
import TimeLineBody from "../../components/calendar/timeline/TimeLineBody";
export default {
  components: {
    TimeLineHeader,
    TimeLinePreview,
    TimeLineBody
  },
  data() {
    return {
      selectedDay: ""
    };
  },
  computed: {
    ...mapGetters("timeline", ["dataTimeLine"]),
    timeLineConvert() {
      var items =
        this.dataTimeLine &&
        this.dataTimeLine.map(val => {
          return {
            event: {
              id: val.id,
              name: val.name,
              color: val.color
            },
            time: {
              from: val.timeLine.timeStart,
              to: val.timeLine.timeEnd
            },
            place: {
              id: Math.random(),
              shortName: val.last_name,
              name: val.first_name
            }
          };
        });
      const map = {};
      items &&
        items.forEach(val =>
          (map[moment(val.time.from).format("YYYY-MM-DD")] =
            map[moment(val.time.to).format("YYYY-MM-DD")] || []).push(val)
        );
      return map;
    }
  },
  methods: {
    ...mapActions("timeline", ["getDataTimeLine"]),
    changeActiveDay(day) {
      this.selectedDay = day;
    }
  },
  mounted() {
    this.getDataTimeLine();
  }
};
</script>
<style scoped>
.timeline-preview-header /deep/ .v-calendar-daily__head {
  margin-right: 0px !important;
}
</style>
