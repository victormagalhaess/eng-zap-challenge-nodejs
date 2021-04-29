import * as vivaRealService from "../Services/vivaRealService.js";

export const getvivaRealRealties = async (req, res) => {
  const data = vivaRealService.findAllVivaRealRealties();
  res.status(200).send(data);
};
