const db = require('../data/dbConfig.js')

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db('groups');
}

function findById(id) {
  return db('groups').where({ id: Number(id) });
}

function insert(group) {
  return db('groups')
    .insert(user)
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

