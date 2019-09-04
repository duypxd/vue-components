<template>
  <v-list class="list">
    <div class="ml-3 font-weight-bold body-2">List Tickets</div>
    <v-list>
      <div v-for="(item, index) in items" :key="index">
        <v-list-item>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>

    <div class="ml-2 font-weight-bold body-2">Ticket Status</div>
    <div class="ma-2" v-for="(item, index) in statusTickets" :key="index">
      <v-row justify="space-between">
        <span class="caption ml-3">{{item.name}}</span>
        <span class="caption mr-3">{{item.value}}%</span>
      </v-row>
      <v-progress-linear :color="item.color" :value="item.value"></v-progress-linear>
    </div>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "All Tickets", icon: "line_weight" },
        { id: 2, name: "My Tickets", icon: "contacts" },
        { id: 3, name: "Open", icon: "open_in_new" },
        { id: 4, name: "In Progress", icon: "turned_in_not" },
        { id: 5, name: "Close", icon: "cancel" }
      ]
    };
  },
  computed: {
    statusTickets() {
      return [
        { name: "Open", value: 57, color: "success" },
        {
          name: "In Progress",
          value: 31,
          color: "primary"
        },
        { name: "Closed", value: 76, color: "error" }
      ];
    }
  }
};
</script>
<style scoped>
.list-all {
  align-items: center;
  display: flex;
  cursor: pointer;
}
.list {
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: #c1c1c1;
}
</style>
