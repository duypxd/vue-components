import { sleep } from "./base";
import { dataTimeLine } from "../mock-data/time-line";

async function getDataTimeLineFromApi() {
  await sleep();
  return dataTimeLine;
}

export default {
  getDataTimeLineFromApi
};
