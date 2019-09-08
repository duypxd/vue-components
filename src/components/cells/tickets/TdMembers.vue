<template>
  <td>
    <MenuListMembers
      style="flex-wrap: unset;"
      title="List members"
      :membersOption="dataRow.members"
      :members_golbal="members_global"
      name="members"
      keySearch="name"
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
