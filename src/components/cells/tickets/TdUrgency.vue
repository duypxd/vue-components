<template>
  <td>
    <v-btn small :color="showClassColor(nameCustom.name)" text-color="white">
      <v-menu
        v-model="menu"
        transition="scale-transition"
        offset-y
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <span v-on="on" class="white--text">{{ nameCustom.name }}</span>
        </template>
        <v-list>
          <v-row no-gutters v-for="(item, index) in taskLevel" :key="index" class="ma-2">
            <v-btn
              class="px-2 white--text text-capitalize"
              :color="showClassColor(item.name)"
              small
              @click="$emit('update', item.id); menu = false"
            >{{ item.id }}: {{ item.name }}</v-btn>
          </v-row>
        </v-list>
      </v-menu>
    </v-btn>
  </td>
</template>
<script>
import { taskLevel } from "../../../config";
export default {
  data() {
    return {
      taskLevel,
      menu: false
    };
  },
  props: {
    dataRow: Object,
    column: Object
  },
  computed: {
    nameCustom() {
      return this.taskLevel.find(x => x.id === this.dataRow.urgency);
    }
  },
  methods: {
    showClassColor(name) {
      if (name === "Ignored") {
        return "#1DAAE5";
      } else if (name === "Backlog") {
        return "#6BE51D";
      } else if (name === "Evaluate") {
        return "#1C5045";
      } else if (name === "Review") {
        return "#831DE5";
      } else if (name === "Final result") {
        return "#E51D64";
      }
    }
  }
};
</script>
<style scoped>
.showBackground {
  border-radius: 10px;
}
.changeSelect {
  text-align: center;
  color: white;
  border: 3px solid transparent;
  background-clip: padding-box;
}
</style>
