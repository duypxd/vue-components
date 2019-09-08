<template>
  <td>
    <v-menu v-model="menu" transition="scale-transition" offset-y style="width: 100px">
      <template v-slot:activator="{ on }">
        <span class="cursor" v-on="on">{{ dataRow.received_date | formatDaysUtc }}</span>
      </template>
      <v-date-picker
        @change="$emit('update', new Date($event).toISOString())"
        no-title
        :value="dataRow.received_date"
        width="290"
        class="elevation-3"
      ></v-date-picker>
    </v-menu>
  </td>
</template>

<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  },
  data() {
    return {
      menu: false
    };
  }
};
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
