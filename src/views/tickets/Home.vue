<template>
  <v-row no-gutters>
    <v-col cols="3">
      <MenuTickets />
    </v-col>
    <v-col cols="9">
      <v-row no-gutters>
        <v-col sm="12">
          <v-row no-gutters justify="space-between">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn primary v-on="on" icon @click="isShow = true">
                  <v-icon>device_hub</v-icon>
                </v-btn>
              </template>
              <span>Category</span>
            </v-tooltip>
            <v-btn>Filter</v-btn>
          </v-row>
        </v-col>
        <v-col sm="12">
          <TabViewTickets
            :itemsTickets="dataTickets"
            :isLoading="isLoading"
            @updateTickets="updateTickets"
            @removeTickets="removeTickets"
            @getTickets="getTickets"
          />
        </v-col>
      </v-row>
    </v-col>
    <ModalCategory :isShow="isShow" @cancel="isShow = false" />
  </v-row>
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
    ...mapActions("tickets/category", ["getDataCategory"]),
    getTickets(type) {
      this.getDataTickets(type);
    }
  },
  computed: {
    ...mapGetters("tickets", ["dataTickets", "isLoading"]),
    ...mapGetters("tickets", ["dataTickets", "isLoading"])
  },
  mounted() {
    this.getTickets({ type: "All", key: "Not Filter", value: "" });
    this.getDataCategory();
  }
};
</script>
