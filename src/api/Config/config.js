import dotenv from "dotenv";

dotenv.config();

const config = {
  realtyURI: process.env.REALTY_URI,
  port: process.env.PORT || "4000",
};

export default config;
