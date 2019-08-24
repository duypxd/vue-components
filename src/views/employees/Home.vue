<template>
  <v-layout column>
    <v-flex xs12 class="pa-2">
      <span class="headline">List Employees</span>
    </v-flex>
    <v-flex xs12>
      <TableEmployees :headers="headers" :items="dataEmployees" />
    </v-flex>
  </v-layout>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import TableEmployees from "./TableEmployees";
import { headersTableEmployees } from "../../config";

export default {
  data() {
    return {
      headers: headersTableEmployees
    };
  },
  components: {
    TableEmployees
  },
  computed: {
    ...mapGetters("employees", ["dataEmployees"])
  },
  methods: {
    ...mapActions("employees", ["getDataEmployees"])
  },
  mounted() {
    this.getDataEmployees();
  }
};
</script>
