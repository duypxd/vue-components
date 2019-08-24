<template>
  <div>
    <v-list dense expand>
      <v-list-tile v-for="(v , i) in items" :key="i" :to="v.path">
        <v-list-tile-action>
          <v-icon>{{v.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{v.name}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Dashboard", path: "/dashboard", icon: "trending_up" },
        { id: 2, name: "Employees", path: "/employees", icon: "people" },
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
          name: "FilesUpload",
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
