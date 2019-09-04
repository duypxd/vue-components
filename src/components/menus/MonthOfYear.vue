<template>
  <div>
    <v-menu offset-x>
      <template v-slot:activator="{ on }">
        <div class="display-1 cursor-menu" v-on="on">
          {{monthName(monthYear.month)}}
          <span class="text--secondary">{{monthYear.year}}</span>
        </div>
      </template>
      <v-list @click.native.stop class="px-2">
        <div class="title">Select the month of year</div>
        <v-divider class="mt-2"></v-divider>
        <v-row no-gutters align="center">
          <div style="width:80px">
            <v-select class="px-1" v-model="month" :items="months" menu-props="auto" label="Month"></v-select>
          </div>
          <div style="width:80px">
            <v-select class="px-1" v-model="year" :items="years" menu-props="auto" label="Year"></v-select>
          </div>
          <div>
            <v-btn class="my-0 primary" @click="submit">Ok</v-btn>
          </div>
        </v-row>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    monthYear: Object
  },
  data() {
    return {
      months: [],
      years: [],
      month: null,
      year: null
    };
  },
  created() {
    for (let i = 1; i <= 12; i++) {
      this.months.push({
        value: i - 1,
        text: i
      });
    }
    for (let i = 2000; i <= 2100; i++) {
      this.years.push(i);
    }
  },
  mounted() {
    this.month = this.monthYear.month;
    this.year = this.monthYear.year;
  },
  methods: {
    submit() {
      const data = {
        month: this.month,
        year: this.year
      };
      this.$emit("submit", data);
      this.menu = false;
    },
    monthName(month) {
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ][month % 12];
    }
  },
  watch: {
    monthYear({ month, year }) {
      this.month = month;
      this.year = year;
    }
  }
};
</script>
<style scoped>
.cursor-menu {
  cursor: pointer;
}
</style>
