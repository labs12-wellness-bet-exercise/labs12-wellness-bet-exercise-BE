const db = require("../data/dbConfig.js");

module.exports = {
  getGroupsByUser,
  getUsersByMembership
};

function getGroupsByUser(id) {
  return db
    .select("*")
    .from("group_participants")
    .leftJoin("groups", "group_participants.group_id", "groups.group_id")
    .where({ user_id: Number(id) });
}

function getUsersByMembership(group_id) {
  return db
    .select("*")
    .from("group_participants")
    .leftJoin("users", "group_participants.user_id", "users.user_id")
    .where({ group_id: Number(group_id) });
}
