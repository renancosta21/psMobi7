const connection = require('../connection');

const getAllPositions = async () => {
  const db = await connection();
  const positions = await db.collection('positions').find({})
      .toArray();
  return positions;
};

module.exports = {getAllPositions};
