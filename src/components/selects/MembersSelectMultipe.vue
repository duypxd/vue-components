<template>
  <v-row no-gutters>
    <slot name="section" :items="membersJoin"></slot>
    <MenuMembersListSearch
      @select="$emit('select', $event)"
      :members_golbal="membersGolbalCustom"
      :title="title"
      :labelSearch="labelSearch"
      :name="name"
      :path="path"
      :keySearch="keySearch"
    >
      <template slot="item" slot-scope="{item}">
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
    membersGolbalCustom() {
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
