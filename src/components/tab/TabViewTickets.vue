<template>
  <v-tabs>
    <v-tab v-for="tab in tabs" :key="tab.id" @change="$emit('getTickets', tab.type)">{{tab.name}}</v-tab>
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
    itemsTickets: Object,
    isLoading: Boolean
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "All Tickets", type: "all_tickets" },
        { id: 2, name: "My Tickets", type: "my_tickets" },
        { id: 3, name: "Open", type: "open" },
        { id: 4, name: "In Progress", type: "in_progress" },
        { id: 5, name: "Closed", type: "closed" },
        { id: 6, name: "Trash", type: "trash" }
      ]
    };
  }
};
</script>
