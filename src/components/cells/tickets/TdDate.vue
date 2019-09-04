<template>
  <td>{{dataRow.received_date}}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
