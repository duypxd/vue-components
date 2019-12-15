<template>
  <div>
    <v-btn icon class="grey lighten-4 ma-0" @click="$emit('prev')">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-btn icon class="grey lighten-4 ma-0 ml-1" @click="$emit('next')">
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
