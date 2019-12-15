<template>
  <td>
    <v-chip
      small
      style="width: 100px"
      :color="'#' + nameCustom.color"
      text-color="white"
    >
      <v-menu
        v-model="menu"
        style="width: 130px"
        transition="scale-transition"
        offset-y
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <span class="name" v-on="on">{{ nameCustom.name }}</span>
        </template>
        <v-list>
          <v-row
            v-for="(item, index) in priority"
            :key="index"
            no-gutters
            class="ma-2"
          >
            <v-btn
              class="px-2 white--text text-capitalize"
              small
              :color="'#' + item.color"
              @click="
                $emit('update', item.id);
                menu = false;
              "
              >{{ item.id }}: {{ item.name }}</v-btn
            >
          </v-row>
        </v-list>
      </v-menu>
    </v-chip>
  </td>
</template>
<script>
import { priority } from "../../../config";
export default {
  props: {
    dataRow: Object,
    column: Object
  },
  data() {
    return {
      priority,
      menu: false
    };
  },
  computed: {
    nameCustom() {
      return this.priority.find(x => x.id === this.dataRow.priority);
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
.name {
  cursor: pointer;
  width: 100px;
}
</style>
