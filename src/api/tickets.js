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
  if (req.type === "All") {
    const data = array_merge(dataTickets);
    if (req.key !== "Not Filter") {
      const resp = data.results.filter(f => f[req.value] === req.key);
      return {
        id: 9999,
        results: resp,
        totals: resp.length,
      }
    } else {
      return data;
    }
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
