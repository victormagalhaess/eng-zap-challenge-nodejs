import expressValidator from "express-validator";
const { query } = expressValidator;

export const validateQueryParams = [
  query("page").isInt({ min: 1 }).toInt(),
  query("pageSize").isInt({ min: 1 }).toInt(),
];
