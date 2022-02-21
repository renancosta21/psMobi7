const connection = require('../connection');

const getAllPois = async () => {
  const db = await connection();
  const pois = await db.collection('pois').find({})
      .toArray();
  return pois;
};

module.exports = {getAllPois};
