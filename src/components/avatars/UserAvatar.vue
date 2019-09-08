<template>
  <v-avatar :size="`${avatarSize}px`" :color="backgroundColor">
    <img :src="imageUrl" :alt="name" v-if="showAvatar">
    <span v-else class="white--text" :style="`font-size: ${avatarSize/2}px`">{{ nameSymbol }}</span>
    <slot/>
  </v-avatar>
</template>
<script>
export default {
  props: {
    avatarSize: Number,
    backgroundColor: {
      type: String,
      default: "primary"
    },
    imageUrl: String,
    name: String,
  },
  computed: {
    showAvatar() {
      return !!this.imageUrl;
    },
    nameSymbol: function() {
      if (this.imageUrl) return null;
      if(!this.name) return "";
      if (!this.name.trim().length) return "";
      let users = this.name.split(" ");
      if (users.length == 1) {
        return this.name.substring(0, 2).toUpperCase();
      }
      return (users[0][0] + "" + users[users.length - 1][0]).toUpperCase();
    }
  }
};
</script>
