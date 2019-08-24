<template>
  <td>{{dataRow.dateOfJoinCompany | formatDateTimeUtc}}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
