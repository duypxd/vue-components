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
    0: {
      id: 1,
      results: mergeResults,
      totals: mergeResults.length,
    }
  }
}

async function getDataTickets(req) {
  if (req.type === "All") {
    const data = array_merge(dataTickets);
    if (req.key !== "Not Filter") {
      const resp = data[0].results.filter(f => f[req.value] === req.key);
      return {
        0: {
          id: 1,
          results: resp,
          totals: resp.length,
        }
      }
    } else {
      return data;
    }
  } else if (req.type === "group") {
    var data = (dataTickets[req.idGroup] || {}).results;
    let groupBy = {};
    data.forEach((item) => {
      const results = data.filter(f => f[req.keyGroup] === item[req.keyGroup])
      groupBy[item[req.keyGroup]] = {
        id: item[req.keyGroup],
        results,
        totals: results.length,
      }
    });
    return groupBy;
  }
}

async function removeTickets(req) {
  return req;
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
