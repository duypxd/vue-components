<template>
  <v-tabs>
    <v-tab
      v-for="tab in tabs"
      :key="tab.id"
      @change="$emit('getTickets', {type: 'All', key: tab.key, value: tab.value})"
    >{{tab.name}}</v-tab>
    <v-tab-item v-for="item in tabs" :key="item.id">
      <TableTickets
        :itemsTickets="itemsTickets"
        :isLoading="isLoading"
        @updateTickets="evt => $emit('updateTickets', evt)"
        @removeTickets="evt => $emit('removeTickets', evt)"
      />
    </v-tab-item>
  </v-tabs>
</template>
<script>
import TableTickets from "../tables/TableTickets";

export default {
  components: {
    TableTickets
  },
  props: {
    itemsTickets: [Array, Object],
    isLoading: Boolean
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "All Tickets", key: "Not Filter", value: "" },
        { id: 2, name: "My Tickets", key: true, value: "assigneeByMe" },
        { id: 3, name: "Open", key: 1, value: "status" },
        { id: 4, name: "In Progress", key: 2, value: "status" },
        { id: 5, name: "Closed", key: 3, value: "status" },
        { id: 6, name: "Trash", key: 3, value: "status" }
      ]
    };
  }
};
</script>
