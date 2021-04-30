import express from "express";
import cors from "cors";

import realtySingleton from "./api/Services/realtySingleton.js";
import config from "./api/Config/config.js";
import routes from "./api/Routes/routes.js";

const app = express();

app.use(cors());
app.use("/api/v1", routes);

const server = app.listen(config.port, async () => {
  await realtySingleton.loadRealties();
  console.log(`The server is running on port ${config.port}`);
});

export default server;
