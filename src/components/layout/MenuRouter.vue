<template>
  <div>
    <v-list dense expand>
      <v-list-item ripple="ripple" rel="noopener" v-for="(v, i) in items" :key="i" :to="v.path">
        <v-list-item-action>
          <v-icon>{{ v.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ v.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Dashboard", path: "/dashboard", icon: "trending_up" },
        { id: 2, name: "Tickets", path: "/tickets", icon: "people" },
        { id: 3, name: "TimeLine", path: "/time-line", icon: "timeline" },
        { id: 4, name: "Kanban", path: "/kan-ban", icon: "settings_overscan" },
        {
          id: 5,
          name: "TaskBoard",
          path: "/task-board",
          icon: "vertical_split"
        },
        { id: 6, name: "Todos", path: "/todo-list", icon: "list" },
        {
          id: 7,
          name: "Files Upload",
          path: "/files-drag-drop",
          icon: "cloud_upload"
        },
        { id: 8, name: "Messages", path: "/chat-message", icon: "message" },
        { id: 9, name: "Report", path: "/report", icon: "report" }
      ]
    };
  }
};
</script>
