const HTTP_OK_STATUS = 200;

const positionsModel = require('../models/positionsModel');

const getAllPositions = async (_req, res) => {
  const positions = await positionsModel.getAllPositions();

  res.status(HTTP_OK_STATUS).json(positions);
};

const getPositionsById = async (req, res) => {
  const {id} = req.params;
  const positionsById = await positionsModel.getPositionsById(id);

  if (!positionsById) return res.status(404).json({message: 'ID not found'});

  return res.status(200).json(positionsById);
};

module.exports = {getAllPositions, getPositionsById};
