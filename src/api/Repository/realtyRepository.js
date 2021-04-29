import axios from "axios";

import config from "../Config/config.js";

const findAllRealties = async () => {
  try {
    const res = await axios.get(config.realtyURI);
    return res.data;
  } catch (err) {
    console.log(`Error fetching the list of realties: ${err}`);
  }
};

const realtyRepository = { findAllRealties };
export default realtyRepository;
