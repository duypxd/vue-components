import { sleep } from "./base";
import { dataTickets } from "../mock-data/data-tickets";

function array_merge(myArray) {
  var arrayConvert = Object.keys(myArray).reduce((arr, key) => {
    const data = { results: myArray[key].results };
    return arr.concat(data)
  }, []);
  var merge = arrayConvert.map(x => x.results);
  var mergeResults = [].concat.apply([], merge);
  return {
    id: 9999,
    results: mergeResults,
    totals: mergeResults.length,
  }
}

async function getDataTickets(req) {
  if (req.type === "all_tickets") {
    return array_merge(dataTickets)
  } else {
    return dataTickets;
  }
}

async function removeTickets(req) {
  return req.id
}

async function dragAndDropRows(req) {
  await sleep();
  return req;
}

async function updateTickets(req) {
  return req;
}


export default {
  getDataTickets,
  removeTickets,
  dragAndDropRows,
  updateTickets
}
