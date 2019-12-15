<template>
  <td>{{ dataRow.ticket_id }}</td>
</template>
<script>
export default {
  props: {
    column: Object,
    dataRow: Object
  }
};
</script>
