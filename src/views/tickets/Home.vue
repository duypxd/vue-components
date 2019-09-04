<template>
  <v-layout row>
    <v-flex xs3>
      <MenuTickets />
    </v-flex>
    <v-flex xs9>
      <v-layout column>
        <v-flex sm12>
          <v-layout row justify-space-between>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn primary v-on="on" icon @click="isShow = true">
                  <v-icon>device_hub</v-icon>
                </v-btn>
              </template>
              <span>Category</span>
            </v-tooltip>
            <v-btn>Filter</v-btn>
          </v-layout>
        </v-flex>
        <v-flex sm12>
          <TabViewTickets
            :itemsTickets="dataTickets"
            :totals="totals"
            :isLoading="isLoading"
            @updateTickets="updateTickets"
            @removeTickets="removeTickets"
            @getTickets="getTickets"
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <ModalCategory :isShow="isShow" @cancel="isShow = false" />
  </v-layout>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import MenuTickets from "../../components/menus/MenuTickets";
import TabViewTickets from "../../components/tab/TabViewTickets";
import ModalCategory from "../../components/dialogs/ModalCategory";

export default {
  components: {
    MenuTickets,
    TabViewTickets,
    ModalCategory
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    ...mapActions("tickets", [
      "getDataTickets",
      "updateTickets",
      "removeTickets"
    ]),
    getTickets(type) {
      this.getDataTickets({ type });
    }
  },
  computed: {
    ...mapGetters("tickets", ["totals", "dataTickets", "isLoading"])
  },
  mounted() {
    this.getTickets("all_tickets");
  }
};
</script>
