const db = require('../data/dbConfig.js')
const mappers = require('./mappers')

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getGroupParticipants
};

function find() {
  return db('groups');
}

function findById(id) {
  return db('groups').where({ id: Number(id) });
}

function getGroupParticipants(group_id) {
  return db('group_participants')
    .where('group_id', group_id)
    .then(participants => {
      participants.map(participant => {
        participant
      })
    })
}

function insert(group) {
  return db('groups')
    .insert(group)
    .then(ids => ({ id: ids[0] }));
}

function update(id, group) {
  return db('groups')
    .where('id', Number(id))
    .update(group);
}

function remove(id) {
  return db('groups')
    .where('id', Number(id))
    .del();
}


function getGroupPhoto(id) {
  return db('groups')
  .where('')
}