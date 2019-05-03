const express = require('express');
const router = express.Router();
const db = require('../../helpers/groupHelpers');

router.get('/', (req, res) => {
  db.find()
    .then( groups => {
      res
        .status(200)
        .json(groups);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: "Something went wrong. We can't show you the list of groups.",
          err
        })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(group => {
      res
        .status(200)
        .json(group);
    })
    .catch(err => {
      res 
        .status(500)
        .json({ error: "Problem finding that group...", err })
    })
});

router.get('/:id/participants', (req, res) => {
  const id = req.params.id;
  db.getGroupParticipants(id)
    .then(participants => {
      if (participants.length == 0) {
        res
          .status(404)
          .json({ message: "That group ID number isn't associated with any participants. \nAre you sure that group exists?"})
      }
        res
          .status(200)
          .json(actions);
    })
    .catch(error => {
      res 
        .status(500)
        .json({ 
          error: "Error finding participants associated with that group ID...",
          error
      })
    })
})

module.exports = router;