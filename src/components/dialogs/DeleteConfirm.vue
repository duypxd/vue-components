<template>
  <v-dialog :value="isShow" width="500" @input="$emit('cancel')">
    <v-card>
      <v-card-title>
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-divider></v-divider>
      <div class="pa-3 ml-3">
        <span class="body-2">{{messageConfirm}}</span>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('cancel')">Cancel</v-btn>
        <v-btn depressed color="primary" @click="$emit('remove')">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    title: String,
    isShow: Boolean,
    messageConfirm: String
  }
};
</script>
