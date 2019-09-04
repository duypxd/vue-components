<template>
  <td>{{dataRow.client_name}}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
