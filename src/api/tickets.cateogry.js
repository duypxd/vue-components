import { dataCategory } from "../mock-data/data-category";

async function getDataCategory() {
  return {
    results: dataCategory,
    count: dataCategory.length,
  }
}

async function createCategory(req) {
  return {
    ...req,
    id: dataCategory.length + 1
  };
}

async function updateCategory(req) {
  const results = dataCategory.find(x => x.id === req.rowId)
  return {
    ...results,
    [req.columnName]: results[req.columnName] = req.bodyRequest[req.columnName]
  }
}

async function removeCategory(req) {
  return req.id;
}

export default {
  getDataCategory,
  removeCategory,
  createCategory,
  updateCategory
}
