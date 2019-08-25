<template>
  <VDataTableExtend
    :headers="headers"
    :items="items"
    :server-items-length="totals"
    :items-per-page="rowsPerPage"
    :options="pagination"
    @update:pagination="updatePagination"
    class="elevation-1 c-table"
    ref="slicktable"
    :hideActions="hideActions"
    :idGroup="idGroup"
    :group="group"
  >
    <template slot="filterRow">
      <tr class="filter-row" style="height: initial">
        <th v-for="column in headers" :key="column.name">
          <slot name="cellFilter" :column="column"></slot>
        </th>
      </tr>
    </template>
    <template v-slot:body="{ items }">
      <tbody>
        <tr v-for="dataRow in items" :key="dataRow.id">
          <slot v-for="column in headers" name="cell" :column="column" :dataRow="dataRow"></slot>
        </tr>
      </tbody>
    </template>
    <template slot="actions-prepend">
      <slot name="actions-prepend"></slot>
    </template>
  </VDataTableExtend>
</template>
<script>
import VDataTableExtend from "./VDataTableExtend";
import Sortable from "sortablejs";

export default {
  components: {
    VDataTableExtend
  },
  props: {
    items: Array,
    totals: Number,
    loading: Boolean,
    pagination: Object,
    dragging: Boolean,
    headers: Array,
    rowsPerPage: Number,
    groupRows: {
      type: String,
      default: "rows"
    },
    groupColumns: {
      type: String,
      default: "columns"
    },
    hideActions: Boolean,
    idGroup: [Number, String],
    group: Object
  },
  data() {
    return {
      drag: false
    };
  },
  methods: {
    updatePagination(pagination) {
      this.$emit("update:pagination", pagination);
    },
    dragAndDropColumn() {
      var tableColumn = this.$refs.slicktable.$el.querySelectorAll("tr")[0];
      var _self = this;
      tableColumn.style.cursor = "move";
      new Sortable(tableColumn, {
        onStart(event) {
          const tableRows = _self.$refs.slicktable.$el.querySelectorAll("tr");
          for (var i = 1; i < tableRows.length; i++) {
            tableRows[i]
              .querySelectorAll("td")
              [event.oldIndex].classList.add("sorting");
          }
        },
        onChange(event) {
          const tableRows = _self.$refs.slicktable.$el.querySelectorAll("tr");
          for (var i = 1; i < tableRows.length; i++) {
            var thisRow = tableRows[i];
            var oldPos = thisRow.querySelector(".sorting");
            var newPos = thisRow.querySelectorAll("td")[event.newIndex];
            var cells = thisRow.querySelectorAll("td");
            for (var x = 0; x < cells.length; x++) {
              if (cells[x].classList.contains("sorting")) {
                var oldIndex = x;
              }
            }
            if (oldIndex < event.newIndex) {
              newPos = thisRow.querySelectorAll("td")[event.newIndex + 1];
              oldPos.classList.add("sort-right");
              thisRow
                .querySelectorAll("td")
                [event.newIndex].classList.add("sort-left");
            } else {
              oldPos.classList.add("sort-left");
              thisRow
                .querySelectorAll("td")
                [event.newIndex].classList.add("sort-right");
            }
            _self.setNewPos(oldPos, newPos, cells, event.newIndex, thisRow);
          }
        },
        onEnd(event) {
          const tableRows = _self.$refs.slicktable.$el.querySelectorAll("tr");
          for (var i = 1; i < tableRows.length; i++) {
            tableRows[i]
              .querySelector("td.sorting")
              .classList.remove("sorting");
          }
          var sorted = tableRows[0].querySelectorAll("th");
          const result = [];
          for (var i = 0; i < sorted.length; i++) {
            var item = sorted[i];
            var resp = _self.headers.find(x => x.text === item.textContent);
            result.push(resp);
          }
          _self.$emit("onEndDragColumns", result);
        },
        animation: 200,
        group: "columns",
        disabled: false,
        ghostClass: "ghost"
      });
    },
    setNewPos(oldPos, newPos, cells, newIndex, thisRow) {
      setTimeout(() => {
        oldPos.classList.remove("sort-left", "sort-right");
        cells[newIndex].classList.remove("sort-left", "sort-right");
        thisRow.insertBefore(oldPos, newPos);
      }, 150);
    },
    array_move(arr, oldIndex, newIndex) {
      if (newIndex >= arr.length) {
        var k = newIndex - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
      return arr;
    },
    dragAndDropRows() {
      const thisRef = this.$refs.slicktable;
      const tbody = thisRef.$el.getElementsByTagName("tbody")[0];
      if (!tbody) return;
      const _self = this;
      Sortable.create(tbody, {
        onEnd(event) {
          const newIndex = event.newIndex;
          const oldIndex = event.oldIndex;
          const result = _self.array_move(_self.items, oldIndex, newIndex);
          _self.$emit("dragAndDropRows", result);
        },
        animation: 200,
        group: "rows",
        disabled: false,
        ghostClass: "ghost",
        onStart() {
          _self.drag = true;
        }
      });
    }
  },
  mounted() {
    this.dragAndDropRows();
    this.dragAndDropColumn();
  },
  updated() {
    this.dragAndDropRows();
    this.dragAndDropColumn();
  }
};
</script>

<style scoped>
.filter-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.c-table /deep/ .v-table thead tr:first-child {
  border: none !important;
}
.c-table /deep/ .v-table thead tr {
  height: 50px;
}
.c-table /deep/ .v-table thead tr:first-child th {
  padding-top: 10px;
}
.c-table /deep/ .v-table thead tr.filter-row th {
  padding-bottom: 10px;
}
</style>
