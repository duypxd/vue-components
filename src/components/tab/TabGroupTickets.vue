<template>
  <div>
    <v-tabs v-model="tabsModel" fixed-tabs background-color="primary">
      <v-tab
        v-for="item in statusTickets"
        :key="item.id"
        @change="$emit('getGroupTypeName', { type: 'group', idGroup: item.id, keyGroup: item.key })"
      >{{ item.name }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabsModel">
      <v-tab-item v-for="item in statusTickets" :key="item.id">
        <slot name="group" :dataKeyGroup="dataKeyGroup(item.key)" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { taskLevel, priority, itemStatus } from "../../config";
export default {
  data() {
    return {
      tabsModel: null,
      taskLevel,
      priority,
      itemStatus
    };
  },
  computed: {
    ...mapGetters("gettersGlobal", ["statusTickets"]),
    ...mapGetters("tickets/category", ["category"])
  },
  methods: {
    dataKeyGroup(type) {
      if (type === "status") {
        return this.itemStatus;
      } else if (type === "category") {
        return this.category;
      } else if (type === "priority") {
        return this.priority;
      } else if (type === "urgency") {
        return this.taskLevel;
      }
    },
    
  }
};
</script>