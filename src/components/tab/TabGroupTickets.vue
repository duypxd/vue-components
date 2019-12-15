<template>
  <div>
    <v-tabs v-model="tabsModel" fixed-tabs background-color="primary">
      <v-tab
        v-for="item in statusTickets"
        :key="item.id"
        @change="changeTabs(item)"
        >{{ item.name }}</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tabsModel">
      <v-tab-item v-for="item in statusTickets" :key="item.id">
        <slot
          name="group"
          :dataKeyGroup="dataKeyGroup(item.key)"
          :keyName="item.name"
        />
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
  watch: {
    statusTickets(val) {
      this.changeTabs({ id: 1000, key: "status" });
    }
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
    changeTabs(item) {
      const route = this.$route.params.type;
      if (route === "group" || route === "kanban") {
        this.$emit("getGroupTypeName", {
          type: "group",
          idGroup: item.id,
          keyGroup: item.key
        });
      }
    }
  }
};
</script>
