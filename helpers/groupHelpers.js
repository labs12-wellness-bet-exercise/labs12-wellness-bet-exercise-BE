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
  toDefaultGroupPhoto,
  deleteGroupPhoto, 
  getJoinCode
};

function find() {
  return db('groups');
}

function findById(id) {
  return db('groups').where({ group_id: Number(id) });
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
  .select('group_photo')
  .update({group_photo: photo})
}

function toDefaultGroupPhoto(id) {
  return db('groups')
  .where({group_id: id})
  .select('group_photo')
  .update({
    group_photo: 'https://images.unsplash.com/photo-1539966903171-89770f33f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  })
}

function deleteGroupPhoto(id) {
 return db('groups')
  .where({group_id: id})
  .select('group_photo')
  .update({group_photo: 'group photo does not exist'}) 
} 

function getJoinCode(id) {
  return db('groups')
  .where({group_id: id})
  .select('join_code')
}

