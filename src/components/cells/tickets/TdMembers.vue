<template>
  <td>
    <MenuListMembers
      style="flex-wrap: unset;"
      title="List members"
      :members-option="dataRow.members"
      :members_golbal="members_global"
      name="members"
      key-search="name"
      @select="$emit('update', $event)"
    />
  </td>
</template>

<script>
import { mapGetters } from "vuex";
import MenuListMembers from "../../menus/MenuListMembers";

export default {
  components: {
    MenuListMembers
  },
  props: {
    dataRow: Object,
    column: Object
  },
  computed: {
    ...mapGetters("members", ["members_global"])
  }
};
</script>
