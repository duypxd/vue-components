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
            <TypeLink />
          </v-row>
        </v-col>
        <v-col sm="12">
          <TabViewTickets
            v-if="$route.params.type === 'table'"
            :itemsTickets="dataTickets[0]"
            :isLoading="isLoading"
            @updateTickets="updateTickets({...$event, key: 0})"
            @removeTickets="removeTickets({...$event, key: 0})"
            @getTickets="getTickets"
          />

          <TabGroupTickets
            v-else-if="$route.params.type !== 'table'"
            @getGroupTypeName="getDataTickets"
          >
            <template
              slot="group"
              v-if="$route.params.type === 'group'"
              slot-scope="{dataKeyGroup}"
            >
              <div v-for="list in dataTickets" :key="list.id">
                <div class="pa-2 title">{{(dataKeyGroup.find(x => x.id === list.id) || {}).name}}</div>
                <TableTickets
                  :itemsTickets="list"
                  :isLoading="isLoading"
                  @updateTickets="updateTickets({...$event, key: list.id})"
                  @removeTickets="removeTickets({...$event, key: list.id})"
                />
              </div>
            </template>
          </TabGroupTickets>
        </v-col>
      </v-row>
    </v-col>
    <ListCategory :isShow="isShow" @cancel="isShow = false" />
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import TypeLink from "./TypeLink";
import MenuTickets from "../../components/menus/MenuTickets";
import TabViewTickets from "../../components/tab/TabViewTickets";
import ListCategory from "../../components/dialogs/ListCategory";
import TableTickets from "../../components/tables/TableTickets";
import TabGroupTickets from "../../components/tab/TabGroupTickets";

export default {
  components: {
    MenuTickets,
    TabViewTickets,
    ListCategory,
    TypeLink,
    TableTickets,
    TabGroupTickets
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
    },
    redirectRoute() {
      if (!this.$route.params.listType) {
        const type = this.$route.params.type || "table";
        this.$router.push({
          name: "Tickets",
          params: {
            ...this.$route.params,
            type
          }
        });
      }
    }
  },
  computed: {
    ...mapGetters("tickets", ["dataTickets", "isLoading"])
  },
  mounted() {
    this.getTickets({ type: "All", key: "Not Filter", value: "" });
    this.getDataCategory();
    this.redirectRoute();
  },
  watch: {
    $route(val) {
      if (val) {
        if (val.params.type !== "table") {
          this.getTickets({ type: val.params.type });
        } else {
          this.getTickets({ type: "All", key: "Not Filter", value: "" });
        }
      }
    }
  }
};
</script>
