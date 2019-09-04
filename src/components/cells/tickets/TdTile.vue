<template>
  <td>{{dataRow.title_ticket}}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
