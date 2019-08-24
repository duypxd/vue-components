import { VDataTable } from "vuetify/es5/components/VDataTable";
import VCheckbox from "vuetify/es5/components/VCheckbox";
export default {
  extends: VDataTable,
  data() {
    return {
      drag: false
    }
  },
  methods: {
    genTHead() {
      if (this.hideHeaders) return;

      let children = []

      if (this.$scopedSlots.headers) {
        const row = this.$scopedSlots.headers({
          headers: this.headers,
          indeterminate: this.indeterminate,
          all: this.everyItem
        })

        children = [this.hasTag(row, "th") ? this.genTR(row) : row]
      } else {
        const row = this.headers.map((o, i) => this.genHeader(o, this.headerKey ? o[this.headerKey] : i))
        const checkbox = this.$createElement(VCheckbox, {
          props: {
            dark: this.dark,
            light: this.light,
            color: this.selectAll === true ? '' : this.selectAll,
            hideDetails: true,
            inputValue: this.everyItem,
            indeterminate: this.indeterminate
          },
          on: { change: this.toggle }
        })

        this.hasSelectAll && row.unshift(this.$createElement("th", [checkbox]))

        children = [this.genTR(row)]
      }

      if (this.$scopedSlots.filterRow) {
        const row = this.$scopedSlots.filterRow({
          headers: this.headers,
          indeterminate: this.indeterminate,
          all: this.everyItem
        })

        children.push(this.hasTag(row, "th") ? this.genTR(row) : row)
      }
      children.push(this.genTProgress());

      return this.$createElement("thead", [children])
    },
    genTBody() {
      const children = this.genItems();
      let tbody;
      if (!this.itemsLength && !this.items.length || !this.filteredItems.length) {
        tbody = this.$createElement("tbody", children);
      } else {
        tbody = this.$createElement("transition-group", {
          props: {
            tag: "tbody",
            name: this.dragging ? "flip-list" : null
          }
        }, children)
      }
      setTimeout(() => {
        tbody.elm.setAttribute("id", this.idGroup);
        tbody.elm.setAttribute("data-group", JSON.stringify(this.group))
      }, 0);
      return tbody;
    },
  },
  props: {
    dragging: {
      type: Boolean,
      default: false
    },
    idGroup: [Number, String],
    group: Object
  }
};
