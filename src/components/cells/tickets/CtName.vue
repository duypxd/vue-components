<template>
  <td>
    <v-textarea
      hide-details
      name="input-7-1"
      :value="dataRow.name"
      class="ma-0 pa-0 custom-text-field input-size"
      rows="1"
      @change="$emit('update', $event)"
    ></v-textarea>
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
<style scoped>
.custom-text-field /deep/ .v-input__slot::before {
  border-style: unset;
}
.input-size {
  width: 130px;
  font-size: 13px;
}
</style>
