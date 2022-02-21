const connection = require('../connection');

const getAllPositions = async () => {
  const db = await connection();
  const positions = await db.collection('posicoes').find({})
      .toArray();
  return positions;
};

module.exports = { getAllPositions };
