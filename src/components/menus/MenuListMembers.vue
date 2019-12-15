<template>
  <MembersSelectMultipe
    class="custom"
    :members-option="membersOption"
    :members_golbal="members_golbal"
    :title="title"
    label-search="Search"
    :name="name"
    :path="path"
    :key-search="keySearch"
    @select="selectMembers"
  >
    <template slot="section" slot-scope="{ items }">
      <v-tooltip v-for="item in items" :key="item.id" bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <UserAvatar
              class="mx-1"
              :avatar-size="32"
              :image-url="(item || '').avatar"
              :name="item.name"
            />
          </div>
        </template>
        <span>{{ item.name || "" }}</span>
      </v-tooltip>
    </template>
    <template slot="item" slot-scope="{ item }">
      <v-row align="center" style="width:100%">
        <v-col cols="2">
          <v-list-item-avatar class="border">
            <v-icon v-if="item.isActive">done</v-icon>
          </v-list-item-avatar>
        </v-col>
        <v-col cols="2">
          <UserAvatar
            class="mx-1"
            :avatar-size="35"
            :image-url="(item || '').avatar"
            :name="item.name"
          />
        </v-col>
        <v-col cols="8">
          <div>{{ item.name }}</div>
          <div class="caption text--secondary">{{ item.user_name }}</div>
        </v-col>
      </v-row>
    </template>
  </MembersSelectMultipe>
</template>

<script>
import MembersSelectMultipe from "../selects/MembersSelectMultipe";
import UserAvatar from "../avatars/UserAvatar";

export default {
  components: {
    MembersSelectMultipe,
    UserAvatar
  },
  props: {
    membersOption: Array,
    members_golbal: Array,
    name: String,
    path: [Object, Array],
    keySearch: String,
    title: String
  },
  methods: {
    selectMembers(user) {
      let data;
      if (user.isActive) {
        data = (this.membersOption || []).filter(id => id !== user.id);
      } else {
        data = [...this.membersOption, user.id];
      }
      this.$emit("select", data);
    }
  }
};
</script>

<style scoped>
.custom {
  align-items: center;
  flex-wrap: wrap;
}
.border {
  border: 1px solid silver;
}
</style>
