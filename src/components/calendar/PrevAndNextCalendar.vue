<template>
  <div>
    <v-btn @click="$emit('prev')" icon class="grey lighten-4 ma-0">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-btn @click="$emit('next')" icon class="grey lighten-4 ma-0 ml-1">
      <v-icon>chevron_right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    startDate: String,
    type: Number
  }
};
</script>
