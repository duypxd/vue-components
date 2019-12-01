<template>
  <td>
    <v-row no-gutters style="width: 90px;">
      <v-btn small icon>
        <v-icon small>visibility</v-icon>
      </v-btn>
      <v-btn small icon @click="$emit('remove', dataRow.id)">
        <v-icon small>cancel</v-icon>
      </v-btn>
      <v-btn v-if="dataRow.assigneeByMe" small icon>
        <v-icon small>person_add</v-icon>
      </v-btn>
    </v-row>
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
