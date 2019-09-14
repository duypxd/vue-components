<template>
  <div>
    <SlickGridTable
      :items="itemsTickets.results"
      :headers="headers"
      :loading="isLoading"
      :totals="itemsTickets.totals"
      :itemsPerPage="20"
      :pagination.sync="pagination"
      @dragAndDropRows="resp => $emit('dragAndDropRows', resp)"
    >
      <template slot="cell" slot-scope="props">
        <component
          :is="getDisplayComponent(props.column.name)"
          :column="props.column"
          :dataRow="props.dataRow"
          @update="update(props.column.name, props.dataRow.id, $event)"
          @remove="$emit('removeTickets', {id: $event})"
        />
      </template>
      <template slot="actions-prepend">
        <div>
          <v-btn outline color="primary" @click="isShow = true">
            <span>Add new</span>
            <v-icon class="pl-1">add</v-icon>
          </v-btn>
        </div>
      </template>
    </SlickGridTable>
  </div>
</template>

<script>
import SlickGridTable from "../../components/slick-grid/SlickGridTable";

import TdCategory from "../cells/tickets/TdCategory";
import TdClient from "../cells/tickets/TdClient";
import TdDate from "../cells/tickets/TdDate";
import TdMembers from "../cells/tickets/TdMembers";
import TdPriority from "../cells/tickets/TdPriority";
import TdStatus from "../cells/tickets/TdStatus";
import TdTicketId from "../cells/tickets/TdTicketId";
import TdTile from "../cells/tickets/TdTile";
import TdUrgency from "../cells/tickets/TdUrgency";
import TdActions from "../cells/tickets/TdActions";

export default {
  components: {
    SlickGridTable,
    TdCategory,
    TdClient,
    TdDate,
    TdMembers,
    TdPriority,
    TdStatus,
    TdTicketId,
    TdTile,
    TdUrgency,
    TdActions
  },
  props: {
    itemsTickets: Object,
    totals: Number,
    isLoading: Boolean
  },
  data() {
    return {
      isShow: false,
      pagination: {},
      headers: [
        {
          visible: true,
          sortable: false,
          text: "Actions",
          value: "actions",
          name: "actions"
        },
        {
          visible: true,
          sortable: false,
          text: "Tickets Title",
          value: "title_ticket",
          name: "title_ticket"
        },
        {
          visible: true,
          sortable: false,
          text: "Received Date",
          value: "received_date",
          name: "received_date"
        },
        {
          visible: true,
          sortable: false,
          text: "Assigned Agent",
          value: "members",
          name: "members"
        },
        {
          visible: true,
          sortable: false,
          text: "Client",
          value: "client_name",
          name: "client_name"
        },
        {
          visible: true,
          sortable: false,
          text: "Tickets Id",
          value: "ticket_id",
          name: "ticket_id"
        },
        {
          visible: true,
          sortable: false,
          text: "Matter Group",
          value: "matter_group",
          name: "matter_group"
        },
        {
          visible: true,
          sortable: false,
          text: "Priority",
          value: "priority",
          name: "priority"
        },
        {
          visible: false,
          sortable: false,
          text: "Urgency",
          value: "urgency",
          name: "urgency"
        },
        {
          visible: false,
          sortable: false,
          text: "Category",
          value: "category",
          name: "category"
        },
        {
          visible: false,
          sortable: false,
          text: "Status",
          value: "status",
          name: "status"
        }
      ],
      isShowCreate: false
    };
  },
  methods: {
    getDisplayComponent(columnName) {
      if (columnName === "actions") {
        return TdActions;
      }
      if (columnName === "title_ticket") {
        return TdTile;
      }
      if (columnName === "received_date") {
        return TdDate;
      }
      if (columnName === "members") {
        return TdMembers;
      }
      if (columnName === "client_name") {
        return TdClient;
      }
      if (columnName === "ticket_id") {
        return TdTicketId;
      }
      if (columnName === "priority") {
        return TdPriority;
      }
      if (columnName === "urgency") {
        return TdUrgency;
      }
      if (columnName === "category") {
        return TdCategory;
      }
      if (columnName === "status") {
        return TdStatus;
      }
      return "td";
    },
    update(columnName, rowId, newValue) {
      const dataRequest = {
        columnName,
        rowId,
        newValue,
        bodyRequest: {
          [columnName]: newValue
        }
      };
      this.$emit("updateTickets", dataRequest);
    },
    updatePagination({ page }) {
      return page;
    }
  }
};
</script>

<style scoped>
.add {
  position: fixed;
  z-index: 10;
  right: 10px;
  bottom: 10px;
}
</style>
