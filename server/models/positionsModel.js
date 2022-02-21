const connection = require('../connection');
const {ObjectId} = require('mongodb');

const getAllPositions = async () => {
  const db = await connection();
  const positions = await db.collection('positions').find({})
      .toArray();
  return positions;
};

const getPositionsById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const positionsById = db.collection('positions')
      // eslint-disable-next-line new-cap
      .findOne({_id: ObjectId(id)});
  return positionsById;
};

module.exports = {getAllPositions, getPositionsById};
