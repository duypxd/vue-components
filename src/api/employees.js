import { sleep } from "./base";
import { dataEmployees } from "../mock-data/data-employees";
async function getDataEmployeesFromApi() {
  await sleep();
  return dataEmployees;
}

export default {
  getDataEmployeesFromApi
}
