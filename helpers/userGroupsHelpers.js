const db = require("../data/dbConfig.js");

module.exports = {
  getGroupsByUser
};

function getGroupsByUser(id) {
  return db
    .select("*")
    .from("group_participants")
    .leftJoin("groups", "group_participants.group_id", "groups.group_id")
    .where({ user_id: Number(id) });
}
