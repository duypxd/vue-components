<template>
  <div>
    <v-tooltip v-for="item in items" :key="item.id" bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon :to="item.route" active-class="primary--text" v-on="on">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </template>
      <span>{{ item.tooltip }}</span>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          route: {
            name: "Tickets",
            params: {
              type: "table"
            }
          },
          icon: "view_list",
          tooltip: "List Tickets"
        },
        {
          id: 2,
          route: {
            name: "Tickets",
            params: {
              type: "kanban"
            }
          },
          icon: "table_chart",
          tooltip: "Kanban"
        },
        {
          id: 3,
          route: {
            params: {
              name: "Tickets",
              type: "group"
            }
          },
          icon: "dashboard",
          tooltip: "Group List Tickets"
        }
      ]
    };
  }
};
</script>
