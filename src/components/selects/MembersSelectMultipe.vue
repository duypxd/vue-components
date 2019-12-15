<template>
  <v-row no-gutters>
    <slot name="section" :items="membersJoin"></slot>
    <MenuMembersListSearch
      :members_golbal="members_golbalCustom"
      :title="title"
      :label-search="labelSearch"
      :name="name"
      :path="path"
      :key-search="keySearch"
      @select="$emit('select', $event)"
    >
      <template slot="item" slot-scope="{ item }">
        <slot name="item" :item="item"></slot>
      </template>
    </MenuMembersListSearch>
  </v-row>
</template>

<script>
import MenuMembersListSearch from "../menus/MenuMembersListSearch";
export default {
  components: {
    MenuMembersListSearch
  },
  props: {
    membersOption: Array,
    members_golbal: Array,
    title: String,
    labelSearch: String,
    name: String,
    path: [Object, String],
    keySearch: String
  },
  computed: {
    membersJoin() {
      return (this.members_golbal || []).filter(x =>
        (this.membersOption || []).includes(x.id)
      );
    },
    members_golbalCustom() {
      let items = JSON.parse(JSON.stringify(this.members_golbal || []));
      let result = items.map(x => {
        if ((this.membersOption || []).includes(x.id)) {
          x.isActive = true;
        } else {
          x.isActive = false;
        }
        return x;
      });
      return result;
    }
  }
};
</script>
