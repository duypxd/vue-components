<template>
  <v-layout column>
    <v-flex xs12 class="pa-2">
      <span class="headline">List Employees</span>
    </v-flex>
    <v-flex xs12>
      <TableEmployees :headers="headers" :items="dataEmployees" @dragAndDropRows="dragAndDropRows" />
    </v-flex>
  </v-layout>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import TableEmployees from "./TableEmployees";
import { headersTableEmployees } from "../../config";

export default {
  components: {
    TableEmployees
  },
  data() {
    return {
      headers: headersTableEmployees
    };
  },
  computed: {
    ...mapGetters("employees", ["dataEmployees"])
  },
  mounted() {
    this.getDataEmployees();
  },
  methods: {
    ...mapActions("employees", ["getDataEmployees", "dragAndDropRows"])
  }
};
</script>
