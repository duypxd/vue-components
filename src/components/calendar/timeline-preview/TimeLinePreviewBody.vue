<template>
  <div :class="`v-calendar resource-viewer v-calendar-daily}`">
    <div class="v-calendar-daily__body">
      <div class="v-calendar-daily">
        <div class="v-calendar-daily__pane">
          <div class="v-calendar-daily__day-container">
            <div
              v-for="h in hours"
              :key="h"
              class="v-calendar-daily__day v-past"
            >
              <div v-for="(item, index) in timeLineGroup[h]" :key="index">
                <TimeLineRow
                  :item="item"
                  :style="{
                    marginLeft: positionItem(item.time.from, h),
                    width:
                      getDuration(item.time.from, item.time.to) * 100 + '%',
                    zIndex: '1',
                    position: 'relative'
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeLineRow from "./TimeLinePreviewRow";
export default {
  components: {
    TimeLineRow
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hours: []
    };
  },
  computed: {
    timeLineGroup() {
      let group = {};
      let to = 0;
      let from = 0;
      let array = JSON.parse(JSON.stringify(this.list));
      array.sort(
        (a, b) => this.getHours(a.time.from) - this.getHours(b.time.from)
      );
      array.forEach((x, i) => {
        let hoursTo = this.getHours(array[i].time.to);
        let hoursFrom = this.getHours(array[i].time.from);
        if (hoursTo > to && hoursFrom > to) {
          from = hoursFrom;
          to = hoursTo;
          (group[from] = group[from] || []).push(array[i]);
        } else {
          to = hoursTo;
          (group[from] || []).push(array[i]);
        }
      });
      return group;
    }
  },
  mounted() {
    for (let i = 1; i <= 24; i++) {
      this.hours.push(i);
    }
  },
  methods: {
    getMinutes(date) {
      return new Date(date).getMinutes();
    },
    getHours(date) {
      return new Date(date).getHours();
    },
    getDuration(from, to) {
      const start = new Date(from).getHours() + this.getMinutes(from) / 60;
      const end = new Date(to).getHours() + this.getMinutes(to) / 60;
      return end - start;
    },
    positionItem(from, h) {
      if (this.getHours(from) === h) {
        return (this.getMinutes(from) / 60) * 100 + "%";
      } else {
        const result = this.getHours(from) - h + this.getMinutes(from) / 60;
        return result * 100 + "%";
      }
    }
  }
};
</script>

<style scoped>
.v-calendar-daily_head-day-label {
  font-size: 16px !important;
}
.v-calendar-daily__day-interval {
  position: relative;
}
.v-calendar-daily__day {
  border-right: unset !important;
}

.v-calendar-daily /deep/ .v-calendar-daily__day {
  border-bottom: none !important;
}
</style>
