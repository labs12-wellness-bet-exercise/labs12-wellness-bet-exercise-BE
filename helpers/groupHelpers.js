const db = require("../data/dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getGroupParticipants,
  getGroupPhoto,
  addGroupPhoto,
  toDefaultGroupPhoto,
  deleteGroupPhoto,
  getAdminMessage,
  updateAdminMessage,
  toDefaultAdminMessage,
  deleteAdminMessage,
  getJoinCode,
  getJoinCodes,
  getGroupId
};

function find() {
  return db("groups");
}

function findById(id) {
  return db("groups").where({ group_id: Number(id) });
}

function getGroupParticipants(group_id) {
  return db("group_participants")
    .where("group_id", group_id)
    .then(participants => {
      participants.map(participant => {
        participant;
      });
    });
}

function insert(group) {
  return db("groups")
    .insert(group)
    .then(ids => ({ id: ids[0] }));
}

function update(id, group) {
  return db("groups")
    .where("id", Number(id))
    .update(group);
}

function remove(id) {
  return db("groups")
    .where("id", Number(id))
    .del();
}

// Group Photo Helpers

function getGroupPhoto(id) {
  return db("groups")
    .where({ group_id: id })
    .select("group_photo");
}

function addGroupPhoto(id, photo) {
  return db("groups")
    .where({ group_id: id })
    .select("group_photo")
    .update({ group_photo: photo });
}

function toDefaultGroupPhoto(id) {
  return db("groups")
    .where({ group_id: id })
    .select("group_photo")
    .update({
      group_photo:
        "https://images.unsplash.com/photo-1539966903171-89770f33f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    });
}

function deleteGroupPhoto(id) {
  return db("groups")
    .where({ group_id: id })
    .select("group_photo")
    .update({ group_photo: "group photo does not exist" });
}

//Group Message helpers

function getAdminMessage(id) {
  return db("groups")
    .where({ group_id: id })
    .select("group_message");
}

function updateAdminMessage(id, message) {
  return db("groups")
    .where({ group_id: id })
    .select("group_message")
    .update({ group_message: message });
}

function toDefaultAdminMessage(id) {
  return db("groups")
    .where({ group_id: id })
    .select("group_message")
    .update({
      group_message: "Welcome to the group."
    });
}

function deleteAdminMessage(id) {
  return db("groups")
    .where({ group_id: id })
    .select("group_message")
    .update({ group_message: "admin message does not exist" });
}

//Join code by ID helper
function getJoinCode(id) {
  return db("groups")
    .where({ group_id: id })
    .select("join_code");
}

// Get array of join codes and group IDs

function getJoinCodes() {
  return db("groups")
    .select("join_code")
    .select("group_id");
}

// Get group_id from join_code
function getGroupId(joinCode) {
  return db("groups")
    .where({ join_code: joinCode })
    .select("group_id");
}
