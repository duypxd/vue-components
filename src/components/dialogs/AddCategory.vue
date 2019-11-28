<template>
  <div class="text-xs-center">
    <v-dialog :value="dialogColor" @input="cancel" width="500" persistent>
      <v-card>
        <div class="primary">
          <v-row justify="center" align="center" no-gutters class="pa-3">
            <div class="title font-weight-regular white--text">Create New Category</div>
            <v-spacer></v-spacer>
            <v-btn class="ma-0" icon @click="cancel">
              <v-icon color="white">close</v-icon>
            </v-btn>
          </v-row>
        </div>
        <v-divider></v-divider>
        <v-form class="pa-3" ref="form" lazy-validation>
          <v-row no-gutters class="my-1">
            <v-text-field
              class="py-1"
              v-model="name"
              :rules="[v => !!v || 'This field is required']"
              label="Name"
              required
            ></v-text-field>
          </v-row>

          <v-row no-gutters class="mb-2" align="center">
            <ColorPicker :isShowDialogColor="true" @emitColorValue="change" />
            <v-chip :color="`#`+color" text-color="white" class="ml-2">{{`#`+color}}</v-chip>
          </v-row>

          <v-textarea
            label="Description"
            v-model="desc"
            class="ma-0 pa-2 custom-text-field fieldDes"
            rows="3"
          ></v-textarea>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="cancel">Cancel</v-btn>
          <v-btn class="v-btn theme--light primary" @click="add">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ColorPicker from "./ColorPicker";

export default {
  components: {
    ColorPicker
  },
  props: {
    dialogColor: Boolean
  },
  data() {
    return {
      name: "",
      desc: "",
      color: ""
    };
  },
  methods: {
    change(obj) {
      this.color = obj.colorValue.slice(1, 7);
    },
    ...mapActions("tickets/category", ["createCategory"]),
    cancel() {
      this.$emit("cancel");
      this.$refs.form.reset();
    },
    add() {
      if (this.$refs.form.validate()) {
        const body = {
          matterId: this.$route.params.projectId,
          name: this.name,
          desc: this.desc,
          color: this.color
        };
        this.createCategory(body);
        this.$emit("cancel");
      }
    }
  }
};
</script>
