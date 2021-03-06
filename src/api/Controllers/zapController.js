import * as zapService from "../Services/zapService.js";

export const getZapRealties = async (req, res, validationResult) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("Bad request.");
    }
    const data = zapService.findAllZapRealties(req.query.page, req.query.pageSize);
    return res.status(200).send(data);
  } catch (err) {
    console.log(`An error ocurred fetching the required data: ${err}`);
    res.status(500).send("Internal server error.");
  }
};
