import * as zapService from "../Services/zapService.js";

export const getZapRealties = async (req, res) => {
  const data = zapService.findAllZapRealties();
  res.status(200).send(data);
};
