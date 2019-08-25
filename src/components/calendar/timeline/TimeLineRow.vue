<template>
  <div class="my-2">
    <div style="text-align: center" class="mb-1">
      <div>{{item.event.name}}</div>
      <div
        class="caption"
        :style="{color: item.event.color}"
      >{{item.time.from | formatDaysUtc}}-{{item.time.to | formatDaysUtc}},&nbsp;{{item.place.shortName}}</div>
    </div>
    <div :style="{background: item.event.color,height:'5px',position:'relative'}">
      <div :style="{background: item.event.color}" class="left"></div>
      <div :style="{background: item.event.color}" class="right"></div>
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
.left {
  height: 12px;
  position: absolute;
  width: 12px;
  top: -4px;
  left: -1px;
  border-radius: 50%;
}
.right {
  height: 12px;
  position: absolute;
  width: 12px;
  top: -4px;
  right: -1px;
  border-radius: 50%;
}
</style>
