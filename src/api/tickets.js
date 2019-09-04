import { sleep } from "./base";
import { dataTickets } from "../mock-data/data-tickets";

async function getDataTickets(req) {
  if (req.type === "all_tickets") {
    return {
      results: dataTickets,
      count: dataTickets.length
    };
  } else if (req.type === "my_tickets") {
    let my_tickets = dataTickets.filter(x => x.assigneeByMe === true)
    return {
      results: my_tickets,
      count: my_tickets.length
    };
  } if (req.type === "open") {
    let open = dataTickets.filter(x => x.status === 1)
    return {
      results: open,
      count: open.length
    };
  } else if (req.type === "in_progress") {
    let in_progress = dataTickets.filter(x => x.status === 2)
    return {
      results: in_progress,
      count: in_progress.length
    };
  } if (req.type === "closed") {
    let closed = dataTickets.filter(x => x.status === 3)
    return {
      results: closed,
      count: closed.length
    };
  } else if (req.type === "trash") {
    let trash = dataTickets.filter(x => x.status === 3)
    return {
      results: trash,
      count: trash.length
    };
  }
}

async function removeTickets(req) {
  return req.id
}

async function dragAndDropRows(req) {
  await sleep();
  return req;
}

export default {
  getDataTickets,
  removeTickets,
  dragAndDropRows
}
