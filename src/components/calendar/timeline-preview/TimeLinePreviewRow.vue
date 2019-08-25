<template>
  <div class="my-1">
    <div class="line-row" :style="{background: item.event.color,height:'5px',position:'relative'}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>
<style scoped>
.line-row{
  border-radius: 2px;
}
</style>

