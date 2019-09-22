<template>
  <td>
    <v-chip small style="width: 100px" :color="'#'+nameCustom.color" text-color="white">
      <v-menu
        style="width: 130px"
        v-model="menu"
        transition="scale-transition"
        offset-y
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <span v-on="on" class="name">{{ nameCustom.name }}</span>
        </template>
        <v-list>
          <v-row no-gutters v-for="(item, index) in priority" :key="index" class="ma-2">
            <v-btn
              class="px-2 white--text text-capitalize"
              small
              :color="'#'+item.color"
              @click="$emit('update', item.id); menu = false"
            >{{ item.id }}: {{ item.name }}</v-btn>
          </v-row>
        </v-list>
      </v-menu>
    </v-chip>
  </td>
</template>
<script>
import { priority } from "../../../config";
export default {
  data() {
    return {
      priority,
      menu: false
    };
  },
  props: {
    dataRow: Object,
    column: Object
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
