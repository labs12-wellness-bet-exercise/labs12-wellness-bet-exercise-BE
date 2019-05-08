const db = require('../data/dbConfig.js')
const mappers = require('./mappers')

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getGroupParticipants,
  getGroupPhoto, 
  addGroupPhoto, 
  deleteGroupPhoto
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


// Group Photo Helpers

function getGroupPhoto(id) {
  return db('groups')
  .where({group_id: id})
  .select('group_photo') 
}

function addGroupPhoto(id, photo) {
  return db('groups')
  .where({group_id: id})
  .insert({group_photo: photo})
}

function updateGroupPhoto() {

}

function deleteGroupPhoto(id) {
 return db('groups')
  .where({group_id: id})
  .select('group_photo')
  .update({group_photo: 'group photo does not exist'}) 
}