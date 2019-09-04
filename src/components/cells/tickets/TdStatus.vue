<template>
  <td>{{dataRow.status}}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
