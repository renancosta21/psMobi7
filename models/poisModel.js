const connection = require('../connection');

const getAllPois = async () => {
  const db = await connection();
  const positions = await db.collection('pois').find({})
      .toArray();
  return positions;
};

module.exports = {getAllPois};
