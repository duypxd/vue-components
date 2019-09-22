<template>
  <td>
    <v-btn small :color="'#' + nameCustom.color" text-color="white">
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
              :color="'#'+item.color"
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
