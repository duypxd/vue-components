<template>
  <div class="text-xs-center">
    <v-dialog :value="isShow" @input="$emit('cancel')" width="500" persistent>
      <v-card>
        {{isShow}}
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('cancel')">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    isShow: Boolean
  }
};
</script>
