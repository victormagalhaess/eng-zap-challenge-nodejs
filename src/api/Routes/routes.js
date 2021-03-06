import express from "express";

import * as vivaRealController from "../Controllers/vivaRealController.js";
import * as zapController from "../Controllers/zapController.js";
import * as middlewares from "../Middlewares/middlewares.js";
import expressValidator from "express-validator";
const { validationResult } = expressValidator;

const routes = express.Router();

// @route GET
// @desc return a list of ZAP valid realties
// @access Public
routes.get("/zap", middlewares.validateQueryParams, async (req, res) => {
  try {
    await zapController.getZapRealties(req, res, validationResult);
  } catch (err) {
    console.log(`An error ocurring fetching the realties: ${err}`);
  }
});

// @route GET
// @desc return a list of Viva Real valid realties
// @access Public
routes.get("/vivareal", middlewares.validateQueryParams, async (req, res) => {
  try {
    await vivaRealController.getvivaRealRealties(req, res, validationResult);
  } catch (err) {
    console.log(`An error ocurred fetching the realties: ${err}`);
  }
});

// @route GET
// @desc HealthCheck route
// @access Public
routes.get("/healthcheck", async (req, res) => {
  try {
    res.status(200).send("Ok");
  } catch (err) {
    res.status(500).send("Internal server error.");
    console.log(`An error ocurred verifying the healthcheck: ${err}`);
  }
});

export default routes;
