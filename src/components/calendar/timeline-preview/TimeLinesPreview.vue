<template>
  <div>
    <TimeLinePreviewHeader
      :type="type"
      :weekYear="weekYear"
      :monthYear="monthYear"
      @changeType="change"
      @changeWeekYear="changeWeekOfYear"
      @changeMonthYear="changeMonthOfYear"
    />
    <v-row no-gutters class="mt-3 preview-list flex-nowrap">
      <v-col v-for="day in dayList" :key="day" class="preview-card">
        <TimeLinePreview
          @activeCard="activePreview(day)"
          :timeLine="previewData[day]"
          :isActive="activePreviewIndex === day"
          :date="day"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";
import TimeLinePreview from "./TimeLinePreview";
import TimeLinePreviewHeader from "./TimeLinePreviewHeader";
export default {
  components: {
    TimeLinePreview,
    TimeLinePreviewHeader
  },
  props: {
    previewData: Object
  },
  data() {
    return {
      weekYear: {
        week: parseInt(moment(new Date()).format("W")),
        year: new Date().getFullYear()
      },
      monthYear: {
        month: parseInt(moment(new Date()).format("M")) - 1,
        year: new Date().getFullYear()
      },
      type: 1,
      activePreviewIndex: null
    };
  },
  methods: {
    activePreview(day) {
      this.activePreviewIndex = day;
      this.$emit("activePreviewDay", day);
    },
    change(type) {
      this.type = type;
    },
    changeWeekOfYear({ week, year }) {
      this.weekYear = { week, year };
    },
    changeMonthOfYear({ month, year }) {
      this.monthYear = { month, year };
    }
  },
  computed: {
    dayList() {
      let list = [];
      let sd = this.startDate.clone();
      list.push(sd.format("YYYY-MM-DD"));
      while (sd.format("YYYY-MM-DD") !== this.endDate.format("YYYY-MM-DD")) {
        sd.add(1, "day");
        list.push(sd.format("YYYY-MM-DD"));
      }
      this.activePreview(list[0]);
      return list;
    },
    startDate() {
      switch (this.type) {
        case 1:
          //week
          return moment()
            .year(this.weekYear.year)
            .week(this.weekYear.week)
            .startOf("isoWeek");
        default:
          //month
          return moment([this.monthYear.year, this.monthYear.month, 1]);
      }
    },
    endDate() {
      const st = moment(this.startDate);
      if (this.type === 1) {
        // week
        return st.add(6, "day");
      }
      // month
      return st.add(1, "month").add(-1, "day");
    }
  }
};
</script>

<style scoped>
.preview-card {
  min-width: 120px;
}
.preview-list {
  overflow: auto;
}
</style>
