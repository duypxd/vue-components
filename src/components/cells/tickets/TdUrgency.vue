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
          <span class="white--text" v-on="on">{{ nameCustom.name }}</span>
        </template>
        <v-list>
          <v-row
            v-for="(item, index) in taskLevel"
            :key="index"
            no-gutters
            class="ma-2"
          >
            <v-btn
              class="px-2 white--text text-capitalize"
              :color="'#' + item.color"
              small
              @click="
                $emit('update', item.id);
                menu = false;
              "
              >{{ item.id }}: {{ item.name }}</v-btn
            >
          </v-row>
        </v-list>
      </v-menu>
    </v-btn>
  </td>
</template>
<script>
import { taskLevel } from "../../../config";
export default {
  props: {
    dataRow: Object,
    column: Object
  },
  data() {
    return {
      taskLevel,
      menu: false
    };
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
