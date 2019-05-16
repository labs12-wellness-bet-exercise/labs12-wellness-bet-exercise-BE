const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getBuyinPhoto,
  addBuyinPhoto,
  deleteBuyinPhoto,
  addPaymentPhoto,
  getUsersByGroupId,
  getPaidStatus,
  updatePaidStatus
};

// returns array of group participants
function find() {
  return db("group_participants");
}

// find by group_participants_id
function findById(id) {
  return db("group_participants").where({ group_participants_id: Number(id) });
}

// add group_participant -- needs group_id and user_id. buyin_proof and paid status default to empty & false respectively
function insert(group_participant) {
  return db("group_participants")
    .insert(group_participant)
    .then(ids => ({ id: ids[0] }));
}

// update by group_participants_id
function update(group_participants_id, group_participant) {
  return db("group_participants")
    .where("group_participants_id", Number(group_participants_id))
    .update(group_participant);
}

// deletes a group_participant by their group_participants_id.
function remove(group_participants_id) {
  return db("group_participants")
    .where("group_participants_id", Number(group_participants_id))
    .del();
}

// Buyin proof helpers
// get buyin_proof by user_id and group_id
function getBuyinPhoto(user_id, group_id) {
  return db("group_participants")
    .where({ user_id: user_id, group_id: group_id })
    .select("buyin_proof");
}

// add payment photo -- requires user_id, group_id and photo
function addPaymentPhoto(user_id, group_id, photo) {
  return db("group_participants")
    .where({ user_id: user_id, group_id: group_id })
    .select("buyin_proof")
    .update({ buyin_proof: photo });
}

// add buyin_proof by user_id and group_id --- this shouldn't be used or needed at all because of the way the table is structured
function addBuyinPhoto(user_id, group_id, photo) {
  return db("group_participants")
    .where({ user_id: user_id, group_id: group_id })
    .insert({ buyin_proof: photo });
}

// delete buyin_proof -- needs user_id and group_id -- actually for use with PUT request
function deleteBuyinPhoto(user_id, group_id) {
  return db("group_participants")
    .where({ user_id: user_id, group_id: group_id })
    .select("buyin_proof")
    .update({ buyin_proof: "buyin photo does not exist" });
}

// get user_ids by group_id

function getUsersByGroupId(group_id) {
  return db("group_participants").where({ group_id: group_id });
}

// get paid status by user_id and group_id

function getPaidStatus(user_id, group_id) {
  return db("group_participants")
    .where({
      user_id: user_id,
      group_id: group_id
    })
    .select("paid");
}

// update paid status by user_id and group_id -- also expects paidStatus

function updatePaidStatus(user_id, group_id, paid) {
  return db("group_participants")
    .where({
      user_id: user_id,
      group_id: group_id
    })
    .select("paid")
    .update({ paid: paid });
}
