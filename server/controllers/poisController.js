const HTTP_OK_STATUS = 200;

const poisModel = require('../models/poisModel');

const getAllPois = async (_req, res) => {
  const pois = await poisModel.getAllPois();

  res.status(HTTP_OK_STATUS).json(pois);
};

module.exports = {getAllPois};
