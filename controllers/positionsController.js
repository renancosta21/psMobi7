const HTTP_OK_STATUS = 200;

const positionsModel = require('../models/positionsModel');

const getAllPositions = async (_req, res) => {
  const positions = await positionsModel.getAll();

  res.status(HTTP_OK_STATUS).json(positions);
};

module.exports = {getAllPositions};
