const db = require('../data/dbConfig.js')

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db('group_participants');
}

function findById(id) {
  return db('group_participants').where({ id: Number(id) });
}

function insert(group_participant) {
  return db('group_participants')
    .insert(group_participant)
    .then(ids => ({ id: ids[0] }));
}

function update(id, group_participant) {
  return db('group_participants')
    .where('id', Number(id))
    .update(group_participant);
}

function remove(id) {
  return db('group_participants')
    .where('id', Number(id))
    .del();
}