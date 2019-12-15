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
                <v-btn primary icon v-on="on" @click="isShow = true">
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
            :items-tickets="dataTickets[0]"
            :is-loading="isLoading"
            :key-group="{ id: 0 }"
            @updateTickets="updateTickets({ ...$event, key: 0 })"
            @removeTickets="removeTickets({ ...$event, key: 0 })"
            @getTickets="getTickets"
            @dragAndDropRows="dragAndDropRows"
          />

          <TabGroupTickets
            v-else-if="$route.params.type !== 'table'"
            @getGroupTypeName="getDataTickets"
          >
            <template
              v-if="$route.params.type === 'group'"
              slot="group"
              slot-scope="{ dataKeyGroup, keyName }"
            >
              <div v-for="list in dataTickets" :key="list.id">
                <div class="pa-2 title">
                  {{ convertKeyGroup(dataKeyGroup, list.id).name }}
                </div>
                <TableTickets
                  :items-tickets="list"
                  :is-loading="isLoading"
                  :index-group="list.id"
                  :group="list"
                  :key-group="convertKeyGroup(dataKeyGroup, list.id, keyName)"
                  @updateTickets="updateTickets({ ...$event, key: list.id })"
                  @removeTickets="removeTickets({ ...$event, key: list.id })"
                  @dragAndDropRows="dragAndDropRows"
                />
              </div>
            </template>
          </TabGroupTickets>
        </v-col>
      </v-row>
    </v-col>
    <ListCategory :is-show="isShow" @cancel="isShow = false" />
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
  computed: {
    ...mapGetters("tickets", ["dataTickets", "isLoading"])
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
  },
  mounted() {
    this.getTickets({ type: "All", key: "Not Filter", value: "" });
    this.getDataCategory();
    this.redirectRoute();
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
    convertKeyGroup(arr, id, name) {
      var object = arr.find(x => x.id === id);
      return { ...object, keyName: name };
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
    },
    dragAndDropRows(evt) {
      const { fromGroupId, toGroupId, oldIndex, newIndex, rowId } = evt;
      const drag = {
        fromGroupId,
        toGroupId,
        oldIndex,
        newIndex,
        rowId
      };
      const fromStage = this.dataTickets[fromGroupId].results.find(
        x => x.id === rowId
      );

      let order = 0;
      if (fromGroupId !== toGroupId) {
        const stage = this.dataTickets[toGroupId].results;
        if (!stage.length) {
          order = fromStage.order;
        } else {
          if (newIndex === 0) {
            order = stage[newIndex].order;
          } else {
            if (newIndex === stage.length) {
              order = stage[newIndex - 1].order;
            } else {
              order = (stage[newIndex].order + stage[newIndex - 1].order) / 2;
            }
          }
        }
        drag.order = order;
      } else {
        const stage = this.dataTickets[fromGroupId].results;
        if (newIndex > oldIndex) {
          if (newIndex === stage.length) {
            order = stage[newIndex].order;
          } else {
            order = (stage[newIndex].order + stage[newIndex + 1].order) / 2;
          }
        } else {
          if (newIndex == 0) {
            order = stage[newIndex].order;
          } else {
            order = (stage[newIndex].order + stage[newIndex - 1].order) / 2;
          }
        }
        drag.order = order;
      }
      const data = {
        drag,
        params: {
          rowId: drag.rowId
        },
        body: {
          [drag.toGroupId]: drag.toGroupId,
          order: drag.order
        }
      };
      this.updateTickets(data);
    }
  }
};
</script>
