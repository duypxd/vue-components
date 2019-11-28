<template>
  <v-menu :close-on-content-click="false" transition="scale-transition" :nudge-width="290" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon>
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
    </template>
    <v-list style="width:100%">
      <div class="text-xs-center pa-2 ml-2 headline">{{title}}</div>
      <v-divider></v-divider>
      <div class="ma-2">
        <v-text-field style="height: 50px;" v-model="search" :label="labelSearch" outlined></v-text-field>
      </div>
      <div class="scroll-list">
        <div class="not-found" v-if="!membersSearch.length">
          There is no
          <b>{{name}}</b>
          matched with your search pattern. Please consider adding {{name}} first. Click
          <router-link :to="path || ''">here</router-link>
          to {{name}}
        </div>
        <div v-else v-for="item in membersSearch" :key="item.id" class="my-2">
          <v-list-item ripple @click.prevent="$emit('select',item)">
            <slot name="item" :item="item"></slot>
          </v-list-item>
        </div>
      </div>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  props: {
    members_golbal: Array,
    labelSearch: String,
    title: String,
    name: String,
    path: [Object, String],
    keySearch: String
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    membersSearch() {
      const filter = this.members_golbal.filter(
        x =>
          (x[this.keySearch] || "")
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
      );
      return filter;
    }
  }
};
</script>

<style scoped>
.scroll-list {
  max-height: 320px;
  overflow: auto;
}
.not-found {
  width: 326px;
  text-align: center;
  padding: 5px 25px;
}
</style>
