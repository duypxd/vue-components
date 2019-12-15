<template>
  <VDataTableExtend
    ref="extendSlick"
    :headers="headers"
    :items="items"
    :server-items-length="totals"
    :items-per-page="itemsPerPage"
    :options="pagination"
    class="elevation-1 c-table"
    @update:pagination="updatePagination"
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
        <tr v-for="dataRow in items" :id="dataRow.id" :key="dataRow.id">
          <slot
            v-for="column in headers"
            name="cell"
            :column="column"
            :dataRow="dataRow"
          ></slot>
        </tr>
      </tbody>
    </template>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
    <!-- <template slot="actions-prepend">
      <slot name="actions-prepend"></slot>
    </template>-->
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
    itemsPerPage: Number,
    indexGroup: [Number, String],
    group: Object
  },
  data() {
    return {
      drag: false
    };
  },
  mounted() {
    this.dragAndDropRows();
    this.dragAndDropColumn();
  },
  updated() {
    this.dragAndDropRows();
    this.dragAndDropColumn();
  },
  methods: {
    updatePagination(pagination) {
      this.$emit("update:pagination", pagination);
    },
    dragAndDropColumn() {
      var tableColumn = this.$refs.extendSlick.$el.querySelectorAll("tr")[0];
      var _self = this;
      tableColumn.style.cursor = "move";
      new Sortable(tableColumn, {
        onStart(event) {
          const tableRows = _self.$refs.extendSlick.$el.querySelectorAll("tr");
          for (var i = 1; i < tableRows.length; i++) {
            tableRows[i]
              .querySelectorAll("td")
              [event.oldIndex].classList.add("sorting");
          }
        },
        onChange(event) {
          const tableRows = _self.$refs.extendSlick.$el.querySelectorAll("tr");
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
          const tableRows = _self.$refs.extendSlick.$el.querySelectorAll("tr");
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
      const thisRef = this.$refs.extendSlick;
      const tbody = thisRef.$el.getElementsByTagName("tbody")[0];
      if (!tbody) return;
      const _self = this;
      const stageId = _self.group ? _self.group.id : null;
      tbody.setAttribute("stage-id", stageId);
      Sortable.create(tbody, {
        onEnd(event) {
          const dataItems = JSON.parse(JSON.stringify(_self.items));
          const fromGroupId = stageId;
          const toGroupId = parseInt(event.to.getAttribute("stage-id"));
          const oldIndex = event.oldIndex;
          const newIndex = event.newIndex;
          const rowId = parseInt(event.item.id);
          const items = _self.array_move(dataItems, oldIndex, newIndex); // result array move
          const results = {
            fromGroupId,
            toGroupId,
            oldIndex,
            newIndex,
            rowId,
            items
          };
          _self.$emit("dragAndDropRows", results);
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
