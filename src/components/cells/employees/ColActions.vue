<template>
  <td>Actions {{ dataRow.id }}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
