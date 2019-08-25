<template>
  <td>{{ dataRow.myProfile.name }}</td>
</template>
<script>
export default {
  props: {
    dataRow: Object,
    column: Object
  }
};
</script>
