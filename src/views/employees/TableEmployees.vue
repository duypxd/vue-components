<template>
  <div>
    <SlickGridTable
      :items="items"
      :headers="headers"
      :loading="false"
      :totals="items.length"
      :rowsPerPage="20"
      :pagination.sync="pagination"
    >
      <template slot="cell" slot-scope="props">
        <component
          :is="getDisplayComponent(props.column.name)"
          :column="props.column"
          :dataRow="props.dataRow"
        />
      </template>
    </SlickGridTable>
  </div>
</template>
<script>
import SlickGridTable from "../../components/slick-grid/SlickGridTable";
//Column Config
import ColActions from "../../components/cells/employees/ColActions";
import ColName from "../../components/cells/employees/ColName";
import ColDateTime from "../../components/cells/employees/ColDateTime";

export default {
  components: {
    SlickGridTable,
    ColActions,
    ColName,
    ColDateTime
  },
  props: {
    headers: Array,
    items: Array
  },
  data() {
    return {
      pagination: {}
    };
  },
  methods: {
    getDisplayComponent(columnName) {
      if (columnName === "actions") {
        return ColActions;
      }
      if (columnName === "name") {
        return ColName;
      }
      if (columnName === "dateTime") {
        return ColDateTime;
      }
      return "td";
    }
  }
};
</script>
