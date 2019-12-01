<template>
  <td>
    <v-btn small icon @click="$emit('remove', dataRow.id)">
      <v-icon small>delete_outline</v-icon>
    </v-btn>
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
