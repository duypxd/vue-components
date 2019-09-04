<template>
  <td>
    <v-layout row>
      <v-btn small icon>
        <v-icon small>visibility</v-icon>
      </v-btn>
      <v-btn small icon @click="$emit('remove', dataRow.id)">
        <v-icon small>cancel</v-icon>
      </v-btn>
      <v-btn small icon v-if="dataRow.assigneeByMe">
        <v-icon small>person_add</v-icon>
      </v-btn>
    </v-layout>
  </td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
