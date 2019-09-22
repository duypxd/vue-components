<template>
  <div class="text-xs-center">
    <v-dialog :value="isShow" @input="cancel" width="500" persistent>
      <v-card>
        <div class="primary">
          <v-row justify="center" align="center" class="pa-3">
            <div class="title font-weight-regular white--text pa-2">Create New Tickets</div>
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
              v-model="title_ticket"
              :rules="[v => !!v || 'This field is required']"
              label="Title"
              required
            ></v-text-field>
          </v-row>

          <v-row no-gutters class="my-1">
            <v-combobox
              v-model="client"
              :items="members_global"
              chips
              item-text="name"
              item-value="id"
              label="Select or create Client"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip :key="index">
                  <v-avatar left>
                    <UserAvatar
                      :avatarSize="32"
                      :imageUrl="(item || {}).avatar"
                      :name="item.name || client"
                    />
                  </v-avatar>
                  {{item.name || client}}
                </v-chip>
              </template>
            </v-combobox>
          </v-row>

          <v-row no-gutters class="my-1">
            <v-select
              v-model="priority_id"
              :items="priority"
              label="Priority"
              item-value="id"
              item-text="name"
              :rules="[v => !!v || 'This field is required']"
              :disabled="keyGroup && keyGroup.keyName === 'Priority' ? true : false"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" :color="'#'+item.color" small class="white--text">
                  <span>{{ item.name }}</span>
                </v-chip>
              </template>
            </v-select>
          </v-row>

          <v-row no-gutters class="my-1">
            <v-select
              v-model="urgency"
              :items="taskLevel"
              label="Urgency"
              item-value="id"
              item-text="name"
              :rules="[v => !!v || 'This field is required']"
              :disabled="keyGroup && keyGroup.keyName === 'Urgency' ? true : false"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" :color="'#'+item.color" small class="white--text">
                  <span>{{ item.name }}</span>
                </v-chip>
              </template>
            </v-select>
          </v-row>

          <v-row no-gutters class="my-1">
            <v-select
              v-model="status_id"
              :items="itemStatus"
              label="Status"
              item-value="id"
              item-text="name"
              :rules="[v => !!v || 'This field is required']"
              :disabled="keyGroup && keyGroup.keyName === 'Status' ? true : false"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" :color="item.color" small class="white--text">
                  <span>{{ item.name }}</span>
                </v-chip>
              </template>
            </v-select>
          </v-row>

          <v-row no-gutters class="my-1">
            <v-select
              v-model="category_id"
              :items="category"
              label="Category"
              item-value="id"
              item-text="name"
              :rules="[v => !!v || 'This field is required']"
              :disabled="keyGroup && keyGroup.keyName === 'Category' ? true : false"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" :color="`#`+item.color" small class="white--text">
                  <span>{{ item.name }}</span>
                </v-chip>
              </template>
            </v-select>
          </v-row>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancel">Cancel</v-btn>
          <v-btn class="v-btn theme--light primary" @click="add">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import UserAvatar from "../avatars/UserAvatar";
import { priority, taskLevel, itemStatus } from "../../config";

export default {
  components: {
    UserAvatar
  },
  props: {
    isShow: Boolean,
    keyGroup: Object
  },
  data() {
    return {
      priority,
      itemStatus,
      taskLevel,
      title_ticket: "",
      client: null,
      priority_id: null,
      urgency: null,
      status_id: null,
      category_id: null
    };
  },
  methods: {
    ...mapActions("tickets", ["createNewTickets"]),
    add() {
      if (this.$refs.form.validate()) {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const req = {
          id: randomNumber,
          title_ticket: this.title_ticket,
          client_name: this.client.name || this.client,
          priority: this.priority_id,
          urgency: this.urgency,
          status: this.status_id,
          category: this.category_id,
          received_date: new Date().toISOString(),
          ticket_id: Math.floor(Math.random() * 10000) + 1,
          assigneeByMe: false,
          order: randomNumber,
          keyId: this.keyGroup.id,
          members: []
        };
        this.createNewTickets(req);
        this.cancel();
      }
    },
    cancel() {
      this.$emit("closeModal");
      this.$refs.form.reset();
    }
  },
  computed: {
    ...mapGetters("tickets/category", ["category"]),
    ...mapGetters("members", ["members_global"])
  },
  watch: {
    keyGroup(val) {
      if (val) {
        if (val.keyName === "Status") {
          this.status_id = val.id;
        } else if (val.keyName === "Urgency") {
          this.urgency = val.id;
        } else if (val.keyName === "Priority") {
          this.priority_id = val.id;
        } else if (val.keyName === "Category") {
          this.category_id = val.id;
        }
      }
    }
  }
};
</script>
