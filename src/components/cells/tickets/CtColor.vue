<template >
  <td>
    <v-chip :color="`#`+dataRow.color" text-color="white">{{`#`+dataRow.color}}</v-chip>
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
