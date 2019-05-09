const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getBuyinPhoto,
  addBuyinPhoto,
  deleteBuyinPhoto
};

function find() {
  return db("group_participants");
}

function findById(id) {
  return db("group_participants").where({ id: Number(id) });
}

function insert(group_participant) {
  return db("group_participants")
    .insert(group_participant)
    .then(ids => ({ id: ids[0] }));
}

function update(id, group_participant) {
  return db("group_participants")
    .where("id", Number(id))
    .update(group_participant);
}

function remove(id) {
  return db("group_participants")
    .where("id", Number(id))
    .del();
}

// Buyin proof helpers
function getBuyinPhoto(id) {
  return db("group_participants")
    .where({ user_id: id })
    .select("buyin_proof");
}

function addBuyinPhoto(id, photo) {
  return db("group_participants")
    .where({ user_id: id })
    .insert({ buyin_proof: photo });
}

function deleteBuyinPhoto(id) {
  return db("group_participants")
    .where({ user_id: id })
    .select("buyin_proof")
    .update({ buyin_proof: "buyin photo does not exist" });
}
