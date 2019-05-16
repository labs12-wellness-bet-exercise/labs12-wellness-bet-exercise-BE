const db = require("../data/dbConfig.js");

module.exports = {
  findByUserID
};

function findByUserID(id) {
  return db("steps").where({ user_id: Number(id) });
}
