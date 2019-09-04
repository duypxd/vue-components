<template>
  <td>{{dataRow.urgency}}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
