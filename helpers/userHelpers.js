const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getUserIdByGoogleId, 
  updateProfilePic
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ user_id: Number(id) });
}

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

function update(id, user) {
  return db("users")
    .where("id", Number(id))
    .update(user);
}

function remove(id) {
  return db("users")
    .where("id", Number(id))
    .del();
}

function getUserIdByGoogleId(uuid) {
  return db("users")
    .where({
      google_uuid: uuid
    })
    .select("user_id");
}

function updateProfilePic(user_id, photo) {
  return db("users")
  .where({
    user_id: user_id
  }).select("profilePhoto").update({profilePhoto: photo})
}