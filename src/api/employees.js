import { sleep } from "./base";
import { dataEmployees } from "../mock-data/data-employees";
async function getDataEmployeesFromApi() {
  await sleep();
  return dataEmployees;
}

async function dragAndDropRows(req) {
  await sleep();
  return req;
}

export default {
  getDataEmployeesFromApi,
  dragAndDropRows
}
