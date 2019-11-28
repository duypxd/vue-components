<template>
  <v-row no-gutters align="center" class="px-2">
    <v-col cols="12" sm="4"></v-col>
    <v-col cols="12" sm="4" class="text-xs-center">
      <WeekOfYear v-if="type === 1" :weekYear="weekYear" @submit="changeWeekOfYear" />
      <MonthOfYear v-else-if="type === 2" :monthYear="monthYear" @submit="changeMonthOfYear" />
    </v-col>
    <v-col cols="12" sm="4">
      <v-row no-gutters justify="end" align="center">
        <PrevAndNextCalendar class="mr-3" @prev="prev" @next="next" />
        <v-btn-toggle :value="type" @change="change" mandatory>
          <v-btn class="px-3" :value="1">Week</v-btn>
          <v-btn class="px-3" :value="2">Month</v-btn>
        </v-btn-toggle>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import WeekOfYear from "../../menus/WeekOfYear";
import MonthOfYear from "../../menus/MonthOfYear";
import PrevAndNextCalendar from "../../calendar/PrevAndNextCalendar";

export default {
  components: {
    WeekOfYear,
    MonthOfYear,
    PrevAndNextCalendar
  },
  props: {
    weekYear: Object,
    monthYear: Object,
    type: Number
  },
  methods: {
    change(type) {
      this.$emit("changeType", type);
    },
    changeWeekOfYear(weekYear) {
      this.$emit("changeWeekYear", weekYear);
    },
    changeMonthOfYear(monthYear) {
      this.$emit("changeMonthYear", monthYear);
    },
    prev() {
      switch (this.type) {
        case 1: //week
          if (this.weekYear.week === 1) {
            this.changeWeekOfYear({ week: 52, year: this.weekYear.year - 1 });
          } else {
            this.changeWeekOfYear({
              week: this.weekYear.week - 1,
              year: this.weekYear.year
            });
          }
          break;
        case 2: //month
          if (this.monthYear.month === 0) {
            this.changeMonthOfYear({
              month: 11,
              year: this.monthYear.year - 1
            });
          } else {
            this.changeMonthOfYear({
              month: this.monthYear.month - 1,
              year: this.monthYear.year
            });
          }
          break;
        default:
          break;
      }
    },
    next() {
      switch (this.type) {
        case 1: //week
          if (this.weekYear.week === 52) {
            this.changeWeekOfYear({ week: 1, year: this.weekYear.year + 1 });
          } else {
            this.changeWeekOfYear({
              week: this.weekYear.week + 1,
              year: this.weekYear.year
            });
          }
          break;
        case 2: //month
          if (this.monthYear.month === 11) {
            this.changeMonthOfYear({ month: 0, year: this.monthYear.year + 1 });
          } else {
            this.changeMonthOfYear({
              month: this.monthYear.month + 1,
              year: this.monthYear.year
            });
          }
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.custom-text-field /deep/ .v-input__control {
  min-height: 40px;
}
</style>
