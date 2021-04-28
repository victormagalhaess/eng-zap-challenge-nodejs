import express from "express";
import config from "./api/Config/index.js";

const app = express();

// @route GET
// @desc HealthCheck route
// @access Public
app.get("/", (req, res) => {
  res.status(200).send("Ok");
});

const server = app.listen(config.port, () =>
  console.log(`The server is running on port ${config.port}`)
);

export default server;
